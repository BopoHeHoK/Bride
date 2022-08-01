const uuid = require('uuid')
const path = require('path')
const { Product, ProductInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, description, productTypeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))
            const productItem = await Product.create({ name, price, description, img: fileName, productTypeId })
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: productItem.id
                    })
                )
            }

            return res.json(productItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async getAll(req, res) {
        let { id, productType, sort, limit, page } = req.query
        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit
        let product;
        let arr = []
        if (id) {
            arr = JSON.parse("[" + id + "]");
        }
        if (!id && productType && !sort) {
            product = await Product.findAndCountAll({ where: { productTypeId: productType }, limit, offset })
        } else if (!id && productType && sort == "По названию") {
            product = await Product.findAndCountAll({ where: { productTypeId: productType }, order: [['name', 'ASC']], limit, offset })
        } else if (!id && productType && sort == "По популярности") {
            product = await Product.findAndCountAll({ where: { productTypeId: productType }, order: [['popularity', 'ASC']], limit, offset })
        } else if (!id && productType && sort == "По цене (возрастание)") {
            product = await Product.findAndCountAll({ where: { productTypeId: productType }, order: [['price', 'ASC']], limit, offset })
        } else if (!id && productType && sort == "По цене (убывание)") {
            product = await Product.findAndCountAll({ where: { productTypeId: productType }, order: [['price', 'DESC']], limit, offset })
        } else if (sort == "По названию") {
            product = await Product.findAndCountAll({ order: [['name', 'ASC']], limit, offset })
        } else if (sort == "По популярности") {
            product = await Product.findAndCountAll({ order: [['popularity', 'ASC']], limit, offset })
        } else if (sort == "По цене (возрастание)") {
            product = await Product.findAndCountAll({ order: [['price', 'ASC']], limit, offset })
        } else if (sort == "По цене (убывание)") {
            product = await Product.findAndCountAll({ order: [['price', 'DESC']], limit, offset })
        } else if (id && !productType) {
            product = await Product.findAndCountAll({ where: { id: arr }, limit, offset })
        } else if (!id && productType) {
            product = await Product.findAndCountAll({ where: { productTypeId: productType }, order: [['price', 'DESC']], limit, offset })
        } else {
            product = await Product.findAndCountAll({ limit, offset })
        }
        return res.json(product)
    }

    async getAllInBasket(req, res) {
        let { id } = req.query
        let product;
        let arr = []
        if (id) {
            arr = JSON.parse("[" + id + "]");
            product = await Product.findAndCountAll({ where: { id: arr, productTypeId }, limit, offset })
        }
        return res.json(product)
    }

    async getOne(req, res) {
        const { id } = req.params
        const productItem = await Product.findOne(
            {
                where: { id },
                include: [{ model: ProductInfo, as: "info" }]
            }
        )
        return res.json(productItem)
    }

    async remove(req, res, next) {
        try {
            const { id } = req.params
            const productItem = await Product.destroy({ where: { id } })
            return res.json(productItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async update(req, res, next) {
        try {
            let { id, popularity } = req.body
            const productItem = await Product.upsert({ id, popularity })
            return res.json(productItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new ProductController()
const { Order, OrderProduct } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async create(req, res, next) {
        try {
            let { comment, receiptType, address, count, cost, status, userId, products } = req.body
            const orderItem = await Order.create({ comment, receiptType, address, count, cost, status, userId })
            if (products) {
                products = JSON.parse(products)
                products.forEach(i =>
                    OrderProduct.create({
                        basketId: i.basketId,
                        productId: i.productId,
                        orderId: orderItem.id
                    })
                )
            }
            return res.json(orderItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let { status, sort, limit, page } = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let order
        if (status && !sort) {
            order = await Order.findAndCountAll({ where: { status }, limit, offset })
        } else if (status && sort == "По дате (сначала новые)") {
            order = await Order.findAndCountAll({ where: { status }, order: [['id', 'DESC']], limit, offset })
        } else if (status && sort == "По дате (сначала давние)") {
            order = await Order.findAndCountAll({ where: { status }, order: [['id', 'ASC']], limit, offset })
        } else if (status && sort == "По цене (убывание)") {
            order = await Order.findAndCountAll({ where: { status }, order: [['cost', 'DESC']], limit, offset })
        } else if (status && sort == "По цене (возрастание)") {
            order = await Order.findAndCountAll({ where: { status }, order: [['cost', 'ASC']], limit, offset })
        } else if (status && sort == "По количеству товаров (убывание)") {
            order = await Order.findAndCountAll({ where: { status }, order: [['count', 'DESC']], limit, offset })
        } else if (status && sort == "По количеству товаров (возрастание)") {
            order = await Order.findAndCountAll({ where: { status }, order: [['count', 'ASC']], limit, offset })
        } else if (sort == "По дате (сначала новые)") {
            order = await Order.findAndCountAll({ order: [['id', 'DESC']], limit, offset })
        } else if (sort == "По дате (сначала давние)") {
            order = await Order.findAndCountAll({ order: [['id', 'ASC']], limit, offset })
        } else if (sort == "По цене (убывание)") {
            order = await Order.findAndCountAll({ order: [['cost', 'DESC']], limit, offset })
        } else if (sort == "По цене (возрастание)") {
            order = await Order.findAndCountAll({ order: [['cost', 'ASC']], limit, offset })
        } else if (sort == "По количеству товаров (убывание)") {
            order = await Order.findAndCountAll({ order: [['count', 'DESC']], limit, offset })
        } else if (sort == "По количеству товаров (возрастание)") {
            order = await Order.findAndCountAll({ order: [['count', 'ASC']], limit, offset })
        } else {
            order = await Order.findAndCountAll({ limit, offset })
        }
        return res.json(order)
    }

    async getOne(req, res) {
        const { id } = req.params
        const orderItem = await Order.findOne(
            {
                where: { id: id },
                include: [{ model: OrderProduct, as: "products" }]
            }
        )
        return res.json(orderItem)
    }

    async update(req, res, next) {
        try {
            let { id, status } = req.body
            const orderItem = await Order.upsert({ id, status })
            return res.json(orderItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new BasketController() 
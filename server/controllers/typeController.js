const { ProductType } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const { name } = req.body
        const productTypeItem = await ProductType.create({ name })
        return res.json(productTypeItem)
    }

    async getAll(req, res) {
        const productTypes = await ProductType.findAll()
        return res.json(productTypes)
    }

    async remove(req, res, next) {
        try {
            const { id } = req.params
            const productTypeItem = await ProductType.destroy({ where: { id } })
            return res.json(productTypeItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new TypeController()

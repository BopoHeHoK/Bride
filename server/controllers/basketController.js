const { BasketProduct } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async create(req, res, next) {
        try {
            let { basketId, productId } = req.body
            const basketItem = await BasketProduct.create({ basketId, productId })
            return res.json(basketItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        const { basketId } = req.query
        const basket = await BasketProduct.findAndCountAll({ where: { basketId: basketId } })
        return res.json(basket)
    }

    async remove(req, res, next) {
        try {
            const { basketId } = req.query
            const basket = await BasketProduct.destroy({ where: { basketId: basketId } })
            return res.json(basket)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async removeOne(req, res, next) {
        try {
            const { id } = req.params
            const basketItem = await BasketProduct.destroy({ where: { id: id } })
            return res.json(basketItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

}

module.exports = new BasketController() 
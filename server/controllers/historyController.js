const { Order, OrderProduct } = require('../models/models')
const ApiError = require('../error/ApiError')

class HistoryController {

    async getAll(req, res) {
        let { userId, sort, limit, page } = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let history
        if (sort == "По дате (сначала новые)") {
            history = await Order.findAndCountAll({ where: { userId: userId }, order: [['id', 'DESC']], limit, offset })
        } else if (sort == "По дате (сначала давние)") {
            history = await Order.findAndCountAll({ where: { userId: userId }, order: [['id', 'ASC']], limit, offset })
        } else if (sort == "По цене (убывание)") {
            history = await Order.findAndCountAll({ where: { userId: userId }, order: [['cost', 'DESC']], limit, offset })
        } else if (sort == "По цене (возрастание)") {
            history = await Order.findAndCountAll({ where: { userId: userId }, order: [['cost', 'ASC']], limit, offset })
        } else if (sort == "По количеству товаров (убывание)") {
            history = await Order.findAndCountAll({ where: { userId: userId }, order: [['count', 'DESC']], limit, offset })
        } else if (sort == "По количеству товаров (возрастание)") {
            history = await Order.findAndCountAll({ where: { userId: userId }, order: [['count', 'ASC']], limit, offset })
        } else {
            history = await Order.findAndCountAll({ where: { userId: userId }, limit, offset })
        }
        return res.json(history)
    }

    async getOne(req, res) {
        const { id } = req.params
        const historyItem = await Order.findOne(
            {
                where: { id: id },
                include: [{ model: OrderProduct, as: "products" }]
            }
        )
        return res.json(historyItem)
    }
}

module.exports = new HistoryController() 
const { Message } = require('../models/models')
const ApiError = require('../error/ApiError')

class MessageController {
    async create(req, res, next) {
        try {
            let { message, username, email, userId } = req.body
            const messageItem = await Message.create({ message, username, email, userId })
            return res.json(messageItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let { sort, limit, page } = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let message
        if (sort == "По дате (сначала новые)") {
            message = await Message.findAndCountAll({ order: [['id', 'DESC']], limit, offset })
        } else if (sort == "По дате (сначала давние)") {
            message = await Message.findAndCountAll({ order: [['id', 'ASC']], limit, offset })
        } else {
            message = await Message.findAndCountAll({ limit, offset })
        }
        return res.json(message)
    }

    async getOne(req, res) {
        const { id } = req.params
        const messageItem = await Message.findOne({ where: { id: id } })
        return res.json(messageItem)
    }

    async removeOne(req, res, next) {
        try {
            const { id } = req.params
            const messageItem = await Message.destroy({ where: { id: id } })
            return res.json(messageItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new MessageController() 
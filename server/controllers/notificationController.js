const { Notification } = require('../models/models')
const ApiError = require('../error/ApiError')

class NotificationController {
    async create(req, res, next) {
        try {
            let { notification, userId } = req.body
            const notificationItem = await Notification.create({ notification, userId })
            return res.json(notificationItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let { userId, sort, limit, page } = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let notifications
        if (sort == "По дате (сначала новые)") {
            notifications = await Notification.findAndCountAll({ where: { userId: userId }, order: [['id', 'DESC']], limit, offset })
        } else if (sort == "По дате (сначала давние)") {
            notifications = await Notification.findAndCountAll({ where: { userId: userId }, order: [['id', 'ASC']], limit, offset })
        } else {
            notifications = await Notification.findAndCountAll({ where: { userId: userId }, limit, offset })
        }
        return res.json(notifications)
    }
}

module.exports = new NotificationController() 
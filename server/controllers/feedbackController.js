const { Feedback } = require('../models/models')
const ApiError = require('../error/ApiError')

class FeedbackController {

    async create(req, res, next) {
        try {
            let { type, feedback, userId } = req.body
            const feedbackItem = await Feedback.create({ type, feedback, userId })
            return res.json(feedbackItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        const feedback = await Feedback.findAndCountAll({ order: [['id', 'DESC']], limit, offset })
        return res.json(feedback)
    }

    async removeOne(req, res, next) {
        try {
            const { id } = req.params
            const feedback = await Feedback.destroy({ where: { id: id } })
            return res.json(feedback)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new FeedbackController() 
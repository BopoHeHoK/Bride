const { SewingSchedule } = require('../models/models')
const ApiError = require('../error/ApiError')

class SewingController {
    async create(req, res, next) {
        try {
            let { date, time } = req.body
            const sewingScheduleItem = await SewingSchedule.create({ date, time })
            return res.json(sewingScheduleItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        const sewingSchedule = await SewingSchedule.findAll()
        return res.json(sewingSchedule)
    }

    async removeOne(req, res, next) {
        try {
            const { id } = req.params
            const sewingSchedule = await SewingSchedule.destroy({ where: { id: id } })
            return res.json(sewingSchedule)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async update(req, res, next) {
        try {
            let { id, date, time } = req.body
            const sewingScheduleItem = await SewingSchedule.upsert({ id, date, time })
            return res.json(sewingScheduleItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new SewingController() 
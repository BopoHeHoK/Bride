const { FittingSchedule } = require('../models/models')
const ApiError = require('../error/ApiError')

class FittingController {
    async create(req, res, next) {
        try {
            let { date, time } = req.body
            const fittingScheduleItem = await FittingSchedule.create({ date, time })
            return res.json(fittingScheduleItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        const fittingSchedule = await FittingSchedule.findAll()
        return res.json(fittingSchedule)
    }

    async removeOne(req, res, next) {
        try {
            const { id } = req.params
            const fittingSchedule = await FittingSchedule.destroy({ where: { id: id } })
            return res.json(fittingSchedule)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async update(req, res, next) {
        try {
            let { id, date, time } = req.body
            const fittingScheduleItem = await FittingSchedule.upsert({ id, date, time })
            return res.json(fittingScheduleItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new FittingController() 
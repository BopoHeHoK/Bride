const uuid = require('uuid')
const path = require('path')
const { Staff } = require('../models/models')
const ApiError = require('../error/ApiError')

class StaffController {
    async create(req, res, next) {
        try {
            let { name, surname, description, post } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))
            const staffItem = await Staff.create({ name, surname, description, post, img: fileName })
            return res.json(staffItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async getAll(req, res) {
        let staff = await Staff.findAll()
        return res.json(staff)
    }

    async update(req, res, next) {
        try {
            let { id, name, surname, description, post } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))
            const staffItem = await Staff.upsert({ id, name, surname, description, post, img: fileName })
            return res.json(staffItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async remove(req, res, next) {
        try {
            const { id } = req.params
            const staffItem = await Staff.destroy({ where: { id } })
            return res.json(staffItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new StaffController() 
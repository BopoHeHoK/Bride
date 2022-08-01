const { Booking } = require('../models/models')
const ApiError = require('../error/ApiError')

class BookingController {
    async create(req, res, next) {
        try {
            let { type, date, time, userId } = req.body
            const bookingItem = await Booking.create({ type, date, time, userId })
            return res.json(bookingItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let { sort, type, status, limit, page } = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let bookings
        if (type && status && sort == "По дате (сначала новые)") {
            bookings = await Booking.findAndCountAll({ where: { type, status }, order: [['id', 'DESC']], limit, offset })
        } else if (type && status && sort == "По дате (сначала давние)") {
            bookings = await Booking.findAndCountAll({ where: { type, status }, order: [['id', 'ASC']], limit, offset })
        } else if (type && !status && sort == "По дате (сначала новые)") {
            bookings = await Booking.findAndCountAll({ where: { type }, order: [['id', 'DESC']], limit, offset })
        } else if (type && !status && sort == "По дате (сначала давние)") {
            bookings = await Booking.findAndCountAll({ where: { type }, order: [['id', 'ASC']], limit, offset })
        } else if (!type && status && sort == "По дате (сначала новые)") {
            bookings = await Booking.findAndCountAll({ where: { status }, order: [['id', 'DESC']], limit, offset })
        } else if (!type && status && sort == "По дате (сначала давние)") {
            bookings = await Booking.findAndCountAll({ where: { status }, order: [['id', 'ASC']], limit, offset })
        } else if (!type && !status && sort == "По дате (сначала новые)") {
            bookings = await Booking.findAndCountAll({ order: [['id', 'DESC']], limit, offset })
        } else if (!type && !status && sort == "По дате (сначала давние)") {
            bookings = await Booking.findAndCountAll({ order: [['id', 'ASC']], limit, offset })
        } else if (type && status && !sort) {
            bookings = await Booking.findAndCountAll({ where: { type, status }, limit, offset })
        } else if (type && !status && !sort) {
            bookings = await Booking.findAndCountAll({ where: { type }, limit, offset })
        } else if (!type && status && !sort) {
            bookings = await Booking.findAndCountAll({ where: { status }, limit, offset })
        } else {
            bookings = await Booking.findAndCountAll({ limit, offset })
        }
        return res.json(bookings)
    }

    async getOne(req, res) {
        const { id } = req.params
        const bookingItem = await Booking.findOne({ where: { id: id } })
        return res.json(bookingItem)
    }

    async update(req, res, next) {
        try {
            let { id, status } = req.body
            const bookingItem = await Booking.upsert({ id, status })
            return res.json(bookingItem)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new BookingController() 
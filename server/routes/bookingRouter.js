const Router = require('express')
const router = new Router()
const BookingController = require('../controllers/bookingController')

router.post('/', BookingController.create)
router.get('/', BookingController.getAll)
router.get('/:id', BookingController.getOne)
router.put('/', BookingController.update)

module.exports = router
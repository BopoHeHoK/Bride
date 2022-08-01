const Router = require('express')
const router = new Router()
const NotificationController = require('../controllers/notificationController')

router.post('/', NotificationController.create)
router.get('/', NotificationController.getAll)

module.exports = router
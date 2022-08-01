const Router = require('express')
const router = new Router()
const OrderController = require('../controllers/orderController')

router.post('/', OrderController.create)
router.get('/', OrderController.getAll)
router.get('/:id', OrderController.getOne)
router.put('/', OrderController.update)


module.exports = router
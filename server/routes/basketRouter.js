const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/BasketController')

router.post('/', BasketController.create)
router.get('/', BasketController.getAll)
router.delete('/', BasketController.remove)
router.delete('/:id', BasketController.removeOne)

module.exports = router
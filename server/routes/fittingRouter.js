const Router = require('express')
const router = new Router()
const FittingController = require('../controllers/fittingController')

router.post('/', FittingController.create)
router.get('/', FittingController.getAll)
router.delete('/:id', FittingController.removeOne)
router.put('/', FittingController.update)


module.exports = router
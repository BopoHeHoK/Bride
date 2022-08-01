const Router = require('express')
const router = new Router()
const SewingController = require('../controllers/sewingController')

router.post('/', SewingController.create)
router.get('/', SewingController.getAll)
router.delete('/:id', SewingController.removeOne)
router.put('/', SewingController.update)


module.exports = router
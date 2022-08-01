const Router = require('express')
const router = new Router()
const MessageController = require('../controllers/messageController')

router.post('/', MessageController.create)
router.get('/', MessageController.getAll)
router.get('/:id', MessageController.getOne)
router.delete('/:id', MessageController.removeOne)

module.exports = router
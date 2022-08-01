const Router = require('express')
const router = new Router()
const FeedbackController = require('../controllers/feedbackController')

router.post('/', FeedbackController.create)
router.get('/', FeedbackController.getAll)
router.delete('/:id', FeedbackController.removeOne)

module.exports = router
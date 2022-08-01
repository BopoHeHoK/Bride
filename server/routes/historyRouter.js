const Router = require('express')
const router = new Router()
const HistoryController = require('../controllers/historyController')

router.get('/', HistoryController.getAll)
router.get('/:id', HistoryController.getOne)

module.exports = router
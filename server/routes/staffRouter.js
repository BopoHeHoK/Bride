const Router = require('express')
const router = new Router()
const StaffController = require('../controllers/staffController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', StaffController.create)
router.get('/', StaffController.getAll)
router.put('/', StaffController.update)
router.delete('/:id', StaffController.remove)

module.exports = router
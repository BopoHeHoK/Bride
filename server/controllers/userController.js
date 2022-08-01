const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: "3h" })
}

class UserController {

    async registration(req, res, next) {
        const { username, email, phone, img, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Некорректный email или пароль"))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ username, email, phone, img, password: hashPassword, role })
        const basket = await Basket.create({ userId: user.id })
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal("Пользователь с таким email не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })

    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }

    async getUser(req, res) {
        const { id } = req.params
        const user = await User.findOne({ where: { id } })
        return res.json(user)
    }

    async editUser(req, res) {
        const { id, username, email, phone } = req.body
        const user = await User.upsert({ id, username, email, phone })
        return res.json(user)
    }
}

module.exports = new UserController()
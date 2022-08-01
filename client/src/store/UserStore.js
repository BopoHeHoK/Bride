import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = "USER"
        this._user = {}
        this._userInfo = {}
        this._contactTypeBar = 0
        this._profileTypeBar = 0
        this._scheduleTypeBar = 0
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsAdmin(role) {
        this._isAdmin = role
    }
    setUser(user) {
        this._user = user
    }
    setUserInfo(info) {
        this._userInfo = info
    }
    setContactTypeBar(typeBar) {
        this._contactTypeBar = typeBar
    }
    setProfileTypeBar(typeBar) {
        this._profileTypeBar = typeBar
    }
    setScheduleTypeBar(typeBar) {
        this._scheduleTypeBar = typeBar
    }

    get isAuth() {
        return this._isAuth
    }
    get isAdmin() {
        return this._isAdmin
    }
    get user() {
        return this._user
    }
    get userInfo() {
        return this._userInfo
    }
    get contactTypeBar() {
        return this._contactTypeBar
    }
    get profileTypeBar() {
        return this._profileTypeBar
    }
    get scheduleTypeBar() {
        return this._scheduleTypeBar
    }
}

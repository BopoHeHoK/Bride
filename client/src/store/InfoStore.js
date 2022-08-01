import { makeAutoObservable } from 'mobx'

export default class InfoStore {
    constructor() {
        this._sewing = []
        this._fitting = []

        this._booking = []
        this._bookingType = ""
        this._bookingStatus = ""
        this._bookingSort = ""
        this._limitBooking = 20
        this._pageBooking = 1
        this._bookingCount = 0

        this._message = []
        this._messageType = ""
        this._messageSort = ""
        this._limitMessage = 20
        this._pageMessage = 1
        this._messageCount = 0

        this._history = []
        this._historyType = ""
        this._historySort = ""
        this._limitHistory = 20
        this._pageHistory = 1
        this._historyCount = 0

        this._notification = []
        this._notificationType = ""
        this._notificationSort = ""
        this._limitNotification = 20
        this._pageNotification = 1
        this._notificationCount = 0

        this._feedback = []
        this._feedbackType = "Нейтральный"
        this._feedbackSort = ""
        this._limitFeedback = 20
        this._pageFeedback = 1
        this._feedbackCount = 0

        this._staff = []
        makeAutoObservable(this)
    }
    setSewing(sewing) {
        this._sewing = sewing
    }
    setFitting(fitting) {
        this._fitting = fitting
    }

    setBooking(booking) {
        this._booking = booking
    }
    setBookingType(type) {
        this._bookingType = type
    }
    setBookingStatus(status) {
        this._bookingStatus = status
    }
    setBookingSort(sort) {
        this._bookingSort = sort
    }
    setPageBooking(page) {
        this._pageBooking = page
    }
    setBookingCount(count) {
        this._bookingCount = count
    }

    setMessage(message) {
        this._message = message
    }
    setMessageType(type) {
        this._messageType = type
    }
    setMessageSort(sort) {
        this._messageSort = sort
    }
    setPageMessage(page) {
        this._pageMessage = page
    }
    setMessageCount(count) {
        this._messageCount = count
    }

    setHistory(history) {
        this._history = history
    }
    setHistoryType(type) {
        this._historyType = type
    }
    setHistorySort(sort) {
        this._historySort = sort
    }
    setPageHistory(page) {
        this._pageHistory = page
    }
    setHistoryCount(count) {
        this._historyCount = count
    }

    setNotification(notification) {
        this._notification = notification
    }
    setNotificationType(type) {
        this._notificationType = type
    }
    setNotificationSort(sort) {
        this._notificationSort = sort
    }
    setPageNotification(page) {
        this._pageNotification = page
    }
    setNotificationCount(count) {
        this._notificationCount = count
    }

    setFeedback(feedback) {
        this._feedback = feedback
    }
    setFeedbackType(type) {
        this._feedbackType = type
    }
    setFeedbackSort(sort) {
        this._feedbackSort = sort
    }
    setPageFeedback(page) {
        this._pageFeedback = page
    }
    setFeedbackCount(count) {
        this._feedbackCount = count
    }

    setStaff(staff) {
        this._staff = staff
    }


    get sewing() {
        return this._sewing
    }
    get fitting() {
        return this._fitting
    }

    get booking() {
        return this._booking
    }
    get bookingType() {
        return this._bookingType
    }
    get bookingStatus() {
        return this._bookingStatus
    }
    get bookingSort() {
        return this._bookingSort
    }
    get limitBooking() {
        return this._limitBooking
    }
    get pageBooking() {
        return this._pageBooking
    }
    get bookingCount() {
        return this._bookingCount
    }

    get message() {
        return this._message
    }
    get messageType() {
        return this._messageType
    }
    get messageSort() {
        return this._messageSort
    }
    get limitMessage() {
        return this._limitMessage
    }
    get pageMessage() {
        return this._pageMessage
    }
    get messageCount() {
        return this._messageCount
    }

    get history() {
        return this._history
    }
    get historyType() {
        return this._historyType
    }
    get historySort() {
        return this._historySort
    }
    get limitHistory() {
        return this._limitHistory
    }
    get pageHistory() {
        return this._pageHistory
    }
    get historyCount() {
        return this._historyCount
    }

    get notification() {
        return this._notification
    }
    get notificationType() {
        return this._notificationType
    }
    get notificationSort() {
        return this._notificationSort
    }
    get limitNotification() {
        return this._limitNotification
    }
    get pageNotification() {
        return this._pageNotification
    }
    get notificationCount() {
        return this._notificationCount
    }

    get feedback() {
        return this._feedback
    }
    get feedbackType() {
        return this._feedbackType
    }
    get feedbackSort() {
        return this._feedbackSort
    }
    get limitFeedback() {
        return this._limitFeedback
    }
    get pageFeedback() {
        return this._pageFeedback
    }
    get feedbackCount() {
        return this._feedbackCount
    }

    get staff() {
        return this._staff
    }
}

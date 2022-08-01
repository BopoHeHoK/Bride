import { makeAutoObservable } from 'mobx'

export default class ProductStore {
    constructor() {
        this._products = []
        this._productType = []
        this._selectedType = ""
        this._productSort = ""
        this._limitProduct = 12
        this._pageProduct = 1
        this._productCount = 0

        this._basket = []
        this._basketItems = []
        this._basketCount = 0

        this._order = {}
        this._orders = []
        this._orderItems = []
        this._orderStatus = ""
        this._orderSort = ""
        this._limitOrders = 20
        this._pageOrders = 1
        this._ordersCount = 0

        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }
    setProductType(type) {
        this.setPageProduct(1)
        this._productType = type
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setProductSort(sort) {
        this._productSort = sort
    }
    setPageProduct(page) {
        this._pageProduct = page
    }
    setProductCount(count) {
        this._productCount = count
    }

    setBasket(basket) {
        this._basket = basket
    }
    setBasketItems(basketItems) {
        this._basketItems = basketItems
    }
    setBasketCount(basketCount) {
        this._basketCount = basketCount
    }

    setOrder(order) {
        this._order = order
    }
    setOrders(orders) {
        this._orders = orders
    }
    setOrderItems(orderItems) {
        this._orderItems = orderItems
    }
    setOrderStatus(status) {
        this._orderStatus = status
    }
    setOrderSort(sort) {
        this._orderSort = sort
    }
    setOrdersCount(ordersCount) {
        this._ordersCount = ordersCount
    }
    setPageOrders(page) {
        this._pageOrders = page
    }
    setTotalCountOrders(count) {
        this._totalCountOrders = count
    }

    get products() {
        return this._products
    }
    get productType() {
        return this._productType
    }
    get selectedType() {
        return this._selectedType
    }
    get productSort() {
        return this._productSort
    }
    get limitProduct() {
        return this._limitProduct
    }
    get pageProduct() {
        return this._pageProduct
    }
    get productCount() {
        return this._productCount
    }

    get basket() {
        return this._basket
    }
    get basketItems() {
        return this._basketItems
    }
    get basketCount() {
        return this._basketCount
    }

    get order() {
        return this._order
    }
    get orders() {
        return this._orders
    }
    get orderItems() {
        return this._orderItems
    }
    get orderStatus() {
        return this._orderStatus
    }
    get orderSort() {
        return this._orderSort
    }
    get limitOrders() {
        return this._limitOrders
    }
    get pageOrders() {
        return this._pageOrders
    }
    get ordersCount() {
        return this._ordersCount
    }
}

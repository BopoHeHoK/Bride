import { $authHost, $host } from './index'

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}
export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}
export const removeType = async (id) => {
    const { data } = await $host.delete('api/type/' + id)
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}
export const fetchProduct = async (id, productType, sort, page, limit) => {
    const { data } = await $host.get('api/product', {
        params: {
            id, productType, sort, limit, page
        }
    })
    return data
}
export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}
export const removeProduct = async (id) => {
    const { data } = await $host.delete('api/product/' + id)
    return data
}
export const updateProduct = async (popularity) => {
    const { data } = await $host.put('api/product', popularity)
    return data
}

export const createProductInBasket = async (basket) => {
    const { data } = await $host.post('api/basket', basket)
    return data
}
export const fetchBasket = async (basketId) => {
    const { data } = await $host.get('api/basket', {
        params: {
            basketId
        }
    })
    return data
}
export const removeProductFromBasket = async (id) => {
    const { data } = await $host.delete('api/basket/' + id)
    return data
}
export const clearBasket = async (basketId) => {
    const { data } = await $host.delete('api/basket', {
        params: {
            basketId
        }
    })
    return data
}

export const createOrder = async (order) => {
    const { data } = await $host.post('api/order', order)
    return data
}
export const fetchOrder = async (status, sort, limit, page) => {
    const { data } = await $host.get('api/order', {
        params: {
            status, sort, limit, page
        }
    })
    return data
}
export const fetchOneOrder = async (id) => {
    const { data } = await $host.get('api/order/' + id)
    return data
}
export const updateOrder = async (status) => {
    const { data } = await $host.put('api/order', status)
    return data
}





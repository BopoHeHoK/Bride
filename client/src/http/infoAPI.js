import { $authHost, $host } from './index'

export const createSewing = async (sewing) => {
    const { data } = await $authHost.post('api/sewing', sewing)
    return data
}
export const fetchSewing = async () => {
    const { data } = await $host.get('api/sewing')
    return data
}
export const removeSewing = async (id) => {
    const { data } = await $authHost.delete('api/sewing/' + id)
    return data
}
export const updateSewing = async (sewing) => {
    const { data } = await $authHost.put('api/sewing', sewing)
    return data
}

export const createFitting = async (fitting) => {
    const { data } = await $authHost.post('api/fitting', fitting)
    return data
}
export const fetchFitting = async () => {
    const { data } = await $host.get('api/fitting')
    return data
}
export const removeFitting = async (id) => {
    const { data } = await $authHost.delete('api/fitting/' + id)
    return data
}
export const updateFitting = async (fitting) => {
    const { data } = await $authHost.put('api/fitting', fitting)
    return data
}

export const createMessage = async (message) => {
    const { data } = await $authHost.post('api/message', message)
    return data
}
export const fetchMessage = async (sort, limit, page) => {
    const { data } = await $host.get('api/message', {
        params: {
            sort, limit, page
        }
    })
    return data
}
export const fetchOneMessage = async (id) => {
    const { data } = await $authHost.get('api/message/' + id)
    return data
}
export const removeMessage = async (id) => {
    const { data } = await $authHost.delete('api/message/' + id)
    return data
}

export const createBooking = async (booking) => {
    const { data } = await $authHost.post('api/booking', booking)
    return data
}
export const fetchBooking = async (sort, type, status, limit, page) => {
    const { data } = await $authHost.get('api/booking', {
        params: {
            sort, type, status, limit, page
        }
    })
    return data
}
export const fetchOneBooking = async (id) => {
    const { data } = await $authHost.get('api/booking/' + id)
    return data
}
export const updateBooking = async (booking) => {
    const { data } = await $authHost.put('api/booking', booking)
    return data
}

export const createStaff = async (staff) => {
    const { data } = await $authHost.post('api/staff', staff)
    return data
}
export const fetchStaff = async () => {
    const { data } = await $host.get('api/staff')
    return data
}
export const removeStaff = async (id) => {
    const { data } = await $authHost.delete('api/staff/' + id)
    return data
}
export const updateStaff = async (staff) => {
    const { data } = await $authHost.put('api/staff', staff)
    return data
}

export const fetchHistory = async (userId, sort, limit, page) => {
    const { data } = await $host.get('api/history', {
        params: {
            userId, sort, limit, page
        }
    })
    return data
}
export const fetchOneHistory = async (id) => {
    const { data } = await $host.get('api/history/' + id)
    return data
}

export const createNotification = async (notification) => {
    const { data } = await $authHost.post('api/notification', notification)
    return data
}
export const fetchNotification = async (userId, sort, limit, page) => {
    const { data } = await $authHost.get('api/notification', {
        params: {
            userId, sort, limit, page
        }
    })
    return data
}

export const createFeedback = async (feedback) => {
    const { data } = await $authHost.post('api/feedback', feedback)
    return data
}
export const fetchFeedback = async (userId) => {
    const { data } = await $authHost.get('api/feedback')
    return data
}
export const removeFeedback = async (id) => {
    const { data } = await $authHost.delete('api/feedback/' + id)
    return data
}


import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Container } from 'react-bootstrap'
import OrdersList from '../components/orders/OrdersList'
import { fetchOrder } from '../http/productAPI'
import { Context } from '../index'
import StatusBar from '../components/orders/StatusBar'
import Pages from '../components/orders/Pages'

const Orders = observer(() => {
    const { user } = useContext(Context)
    const { product } = useContext(Context)

    console.log(product.orderSort)

    useEffect(() => {
        fetchOrder(null, null, product.limitOrders, product.pageOrders).then(data => {
            product.setOrders(data.rows)
            product.setOrdersCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchOrder(product.orderStatus, product.orderSort, product.limitOrders, product.pageOrders).then(data => {
            product.setOrders(data.rows)
            product.setOrdersCount(data.count)
        })
    }, [product.orderStatus, product.orderSort, product.limitOrders, product.pageOrders])

    return (
        <Container className="mt-4">
            {user.isAdmin === "ADMIN"
                ?
                <div>
                    <StatusBar />
                    <OrdersList />
                    <div className="d-flex justify-content-center">
                        <Pages />
                    </div>
                </div>
                :
                <div>
                    <h1>Доступ к странице имеют только администраторы!</h1>
                </div>
            }
        </Container>
    )
})

export default Orders



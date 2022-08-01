import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Context } from '../../index'
import HistoryOrderList from './HistoryOrderList'
import { fetchOneOrder, fetchOrder, fetchProduct } from '../../http/productAPI'
import { fetchUser } from '../../http/userAPI'

const HistoryPage = observer(() => {
    const [history, setHistory] = useState({})
    const { product } = useContext(Context)
    const [order, setOrder] = useState({ info: [] })
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchOneOrder(id).then(data => setHistory(data))
    }, [])

    useEffect(() => {
        fetchOneOrder(id).then(data => setOrder(data))
    }, [])


    let userId = history.userId

    useEffect(() => {
        if (userId)
            fetchUser(history.userId).then(data => setUser(data))
    }, [history.userId])

    useEffect(() => {
        fetchOrder(product.selectedStatus, product.sortOrders, product.limitOrders, product.pageOrders).then(data => {
            product.setOrders(data.rows)
            product.setOrdersCount(data.count)
        })
    }, [product.selectedStatus, product.sortOrders, product.limitOrders, product.pageOrders])

    let productId = (order.products || []).map(item => item.productId)

    useEffect(() => {
        fetchProduct(null, null, null, productId).then(data => {
            product.setOrderItems(data.rows)
        })
    }, [productId])

    console.log(productId)

    return (
        <Container className=" mt-3">
            <Row className="d-flex">
                <Col md={6} className="mt-4">
                    <Row className="text-center mb-5">
                        <h1>Детали заказа</h1>
                        <hr />
                        <HistoryOrderList />
                    </Row>
                </Col>
                <Col md={6} className="mt-4">
                    <Row className="text-center">
                        <h1>Контакты клиента</h1>
                        <hr />
                    </Row>
                    <div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>Имя: </h3>
                            <div style={{ fontSize: 24, textDecoration: 'underline black' }}>{user.username}</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>Email: </h3>
                            <div style={{ fontSize: 24, textDecoration: 'underline black' }}>{user.email}</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>Телефон: </h3>
                            <div style={{ fontSize: 24, textDecoration: 'underline black' }}>{user.phone}</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>Доставка: </h3>
                            {history.receiptType
                                ?
                                <div style={{ fontSize: 24, textDecoration: 'underline black' }}>Заберёт сам</div>
                                :
                                <div style={{ fontSize: 24, textDecoration: 'underline black' }}>{history.address}</div>
                            }
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>Комментарий к заказу: </h3>
                            <div style={{ fontSize: 24, textDecoration: 'underline black' }}>{history.comment}</div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <h3>Статус заказа: </h3>
                            <div style={{ fontSize: 24 }}>{history.status}</div>
                        </div>
                        <hr />
                    </div>
                </Col>
            </Row>
            <hr />
            <div className="d-flex justify-content-between mt-5 mb-5">
                <h2>Общая стоимость заказа: </h2>
                <h2>{history.cost} руб.</h2>
            </div>
            <hr />
        </Container >
    )
})

export default HistoryPage


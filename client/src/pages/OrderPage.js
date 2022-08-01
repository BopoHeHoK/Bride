import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Col, Row, Button, Dropdown } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Context } from '../index'
import OrderList from '../components/orders/OrderList'
import { createNotification } from '../http/infoAPI'
import { fetchOneOrder, fetchProduct, updateOrder } from '../http/productAPI'
import { fetchUser } from '../http/userAPI'

const OrderPage = observer(() => {
    const { product } = useContext(Context)
    const [order, setOrder] = useState({ info: [] })
    const [user, setUser] = useState({})

    const { id } = useParams()

    useEffect(() => {
        fetchOneOrder(id).then(data =>
            setOrder(data))
    }, [id])
    let productId = (order.products || []).map(item => item.productId)

    useEffect(() => {
        fetchProduct(productId).then(data => {
            product.setOrderItems(data.rows)
        })
    }, [productId])

    let userId = order.userId

    console.log(productId)

    useEffect(() => {
        if (userId)
            fetchUser(order.userId).then(data => setUser(data))
    }, [order.userId])

    const updateOrderStatus = (status) => {
        const formData = new FormData()
        formData.append("id", id)
        formData.append("status", status)
        updateOrder(formData)
        setTimeout(() => document.location.reload(), 1000)
    }

    if (order.status === "Заказ принят") {
        const formData = new FormData()
        formData.append("notification", "Ваш заказ принят")
        formData.append("userId", user.id)
        createNotification(formData)
    }
    if (order.status === "Заказ готов") {
        const formData = new FormData()
        formData.append("notification", "Ваш заказ готов")
        formData.append("userId", user.id)
        createNotification(formData)
    }
    if (order.status === "Заказ выдан") {
        const formData = new FormData()
        formData.append("notification", "Ваш заказ выдан")
        formData.append("userId", user.id)
        createNotification(formData)
    }
    if (order.status === "Заказ отклонён") {
        const formData = new FormData()
        formData.append("notification", "Ваш заказ отклонён")
        formData.append("userId", user.id)
        createNotification(formData)
    }

    return (
        <Container className=" mt-3">
            <Row className="d-flex">
                <Col md={6} className="mt-4">
                    <Row className="text-center mb-5">
                        <h1>Детали заказа</h1>
                        <hr />
                        <OrderList />
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
                            {order.receiptType
                                ?
                                <div style={{ fontSize: 24, textDecoration: 'underline black' }}>Заберёт сам</div>
                                :
                                <div style={{ fontSize: 24, textDecoration: 'underline black' }}>{order.address}</div>
                            }
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>Комментарий к заказу: </h3>
                            <div style={{ fontSize: 24, textDecoration: 'underline black' }}>{order.comment}</div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <h3>Статус заказа: </h3>
                            <div style={{ fontSize: 24 }}>{order.status}</div>
                        </div>
                        <hr />
                    </div>
                </Col>
            </Row>
            <hr />
            <div className="d-flex justify-content-between mt-5 mb-5">
                <h2>Общая стоимость заказа: </h2>
                <h2>{order.cost} руб.</h2>
            </div>
            <hr />
            {order.status != "Заказ создан"
                ?
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <Dropdown className="me-2">
                        <Dropdown.Toggle variant="outline-dark">{order.status || "Выбрать статус"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => updateOrderStatus("Заказ принят")}>
                                Заказ принят
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => updateOrderStatus("Заказ готов")}>
                                Заказ готов
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => updateOrderStatus("Заказ выдан")}>
                                Заказ выдан
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button onClick={() => updateOrderStatus("Заказ отклонён")} className="ms-2" variant="outline-danger">Отклонить заказ</Button>
                </div>
                :
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <Button onClick={() => updateOrderStatus("Заказ принят")} className="me-2" variant="outline-success">Принять заказ</Button>
                    <Button onClick={() => updateOrderStatus("Заказ отклонён")} className="ms-2" variant="outline-danger">Отклонить заказ</Button>

                </div>
            }
        </Container >
    )

})

export default OrderPage

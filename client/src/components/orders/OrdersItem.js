import React, { useEffect, useState } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { fetchUser } from '../../http/userAPI'
import { ORDERS_ROUTE } from '../../utils/consts'

const OrdersItem = ({ orderItem }) => {
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    let userId = orderItem.userId

    useEffect(() => {
        if (userId)
            fetchUser(orderItem.userId).then(data => setUser(data))
    }, [orderItem.userId])

    return (
        <Card className="mt-2 mb-2">
            <Row className="mt-2">
                <Col md={1}>
                    <h6>№ {orderItem.id}</h6>
                </Col>
                <Col md={1}>
                    <p>{user.username}</p>
                </Col>
                <Col md={2}>
                    <p>{user.email}</p>
                </Col>
                <Col md={2}>
                    <p>{orderItem.count}</p>
                </Col>
                <Col md={2}>
                    <p>{orderItem.cost} руб.</p>
                </Col>
                <Col md={2}>
                    <p>{orderItem.status}</p>
                </Col>
                <Col md={2}>
                    <Button
                        onClick={() => navigate(ORDERS_ROUTE + "/" + orderItem.id)}
                        className="m-3"
                        variant="outline-dark"
                    >
                        Посмотреть
                    </Button>
                </Col>
            </Row>

        </Card>
    )
}

export default OrdersItem
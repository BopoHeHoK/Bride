import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import OrderItem from './OrdersItem'
import Sorting from './Sorting'

const OrdersList = observer(() => {
    const { product } = useContext(Context)

    return (
        <Container style={{ width: "80%" }} align="center">
            <div className="d-flex justify-content-between mt-4 mb-4 me-2">
                <h4>Всего заказов: {product.ordersCount}</h4>
                <Sorting />
            </div>
            <Row className="mt-2">
                <Col md={1}>
                    <h6>Номер заказа:</h6>
                </Col>
                <Col md={1}>
                    <h6>Имя заказчика:</h6>
                </Col>
                <Col md={2}>
                    <h6>Email заказчика:</h6>
                </Col>
                <Col md={2}>
                    <h6>Количество товаров:</h6>
                </Col>
                <Col md={2}>
                    <h6>Общая стоимость:</h6>
                </Col>
                <Col md={2}>
                    <h6>Статус заказа:</h6>
                </Col>
            </Row>
            <Row className="d-flex">
                {product.orders.map(orderItem =>
                    <OrderItem key={orderItem.id} orderItem={orderItem} />
                )}
            </Row>
        </Container>
    );
});

export default OrdersList;

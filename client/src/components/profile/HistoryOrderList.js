import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row } from 'react-bootstrap'
import { Context } from '../../index'
import BasketItem from '../basket/BasketItem'

const HistoryOrderList = observer(() => {
    const { product } = useContext(Context)

    return (
        <Container style={{ width: "80%" }} align="center">
            <Row className="d-flex">
                {(product.orderItems || []).map(orderItems =>
                    <BasketItem key={orderItems.id} basketItems={orderItems} />
                )}
            </Row>
        </Container >
    );
});

export default HistoryOrderList;

import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row } from 'react-bootstrap'
import { Context } from '../../index'
import BasketItem from './BasketItem'

const BasketList = observer(() => {
    const { product } = useContext(Context)

    return (
        <Container className="mt-3" align="center">
            <Row className="d-flex">
                {product.basketItems.map(basketItems =>
                    <BasketItem key={basketItems.id} basketItems={basketItems} />
                )}
            </Row>
        </Container>
    );
});

export default BasketList;

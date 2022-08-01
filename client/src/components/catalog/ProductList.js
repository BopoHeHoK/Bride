import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Container, Row } from 'react-bootstrap'
import { Context } from '../../index'
import ProductItem from './ProductItem'
import CreateProduct from './modals/CreateProduct'
import Pages from './Pages'

const ProductList = observer(() => {
    const { product } = useContext(Context)
    const { user } = useContext(Context)

    const [productVisible, setProductVisible] = useState(false)

    return (
        <Container>
            {user.isAdmin === "ADMIN"
                ?
                <Button
                    onClick={() => setProductVisible(true)}
                    style={{ width: "100%" }}
                    className="mt-4"
                    variant={"outline-success"}
                >
                    Добавить товар
                </Button>
                :
                <div />

            }
            <Row className="d-flex justify-content-center ">
                {product.products.map(product =>
                    <ProductItem key={product.id} product={product} />
                )}
            </Row>
            <div className="d-flex justify-content-center">
                <Pages />
            </div>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
        </Container>
    );
});

export default ProductList;

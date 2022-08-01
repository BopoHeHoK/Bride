import React, { useContext, useEffect } from 'react'
import '../styles/App.css'
import { observer } from 'mobx-react-lite'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../index'
import TypeBar from '../components/catalog/TypeBar'
import Sorting from '../components/catalog/Sorting'
import ProductList from '../components/catalog/ProductList'
import { fetchProduct, fetchTypes } from '../http/productAPI'

const Catalog = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setProductType(data))
        fetchProduct(null, null, null, product.pageProduct, product.limit).then(data => {
            product.setProducts(data.rows)
            product.setProductCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProduct(null, product.selectedType, product.productSort, product.pageProduct, product.limitProduct).then(data => {
            product.setProducts(data.rows)
            product.setProductCount(data.count)
        })
    }, [product.selectedType, product.pageProduct, product.productSort])

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <Sorting />
                    <ProductList />
                </Col>
            </Row>
        </Container>
    );
});

export default Catalog;

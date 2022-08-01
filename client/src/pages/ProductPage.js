import React, { useEffect, useState } from 'react'
import { Container, Image, Button, Col, Row, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { SCHEDULE_ROUTE } from '../utils/consts'
import { createProductInBasket, fetchOneProduct } from '../http/productAPI'

const ProductPage = () => {
  const [product, setProduct] = useState({ info: [] })
  const { id } = useParams()

  let token
  try {
    token = jwt_decode(localStorage.getItem('token'))
  } catch (err) {
    console.log('Error: ')
  }

  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data))
  }, [])

  const addProduct = () => {
    const formData = new FormData()
    formData.append("basketId", token.id)
    formData.append("productId", product.id)
    createProductInBasket(formData)
  }

  return (
    <Container className=" mt-3">
      <Row className="d-flex">
        <Col className="d-flex justify-content-center" md={7}>
          <Image src={process.env.REACT_APP_API_URL + '/' + product.img} width="300" height="300" />
        </Col>
        <Col md={5}>
          <div>
            <div style={{ fontSize: 48 }}>{product.name}</div>
            <div style={{ fontSize: 24 }}>{product.description}</div>
            <div style={{ fontSize: 32 }}>{product.price} руб.</div>
            <Row className="mt-2">
              <Button onClick={() => addProduct()} variant="dark">Добавить в избранное</Button>
              <Nav.Link href={SCHEDULE_ROUTE} style={{ color: "DimGrey" }}>Записаться на примерку</Nav.Link>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-4">
        <h1>Подробное описание</h1>
        {product.info.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? "LavenderBlush" : "transparent", padding: 7 }}>
            {info.title}: {info.description}
          </Row>)}
      </Row>
    </Container >
  )
}

export default ProductPage


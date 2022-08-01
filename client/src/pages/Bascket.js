import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Container } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { Context } from '../index'
import BasketList from '../components/basket/BasketList'
import BasketFooter from '../components/basket/BasketFooter'
import { fetchBasket, fetchProduct } from '../http/productAPI'

const Basket = observer(() => {
  const { product } = useContext(Context)

  let token
  try {
    token = jwt_decode(localStorage.getItem('token'))
  } catch (err) {
    console.log('Error: ')
  }

  useEffect(() => {
    fetchBasket(token.id).then(data => {
      product.setBasket(data.rows)
    })
  }, [])

  let productId = product.basket.map(product => product.productId)

  useEffect(() => {
    if (productId.length !== 0)
      fetchProduct(productId).then(data => {
        product.setBasketItems(data.rows)
        product.setBasketCount(data.count)
      })
  }, [productId])

  return (
    <Container>
      <div>
        <h1 align="center">Избранное</h1>
        <div>
          <BasketList />
        </div>
        <div>
          <BasketFooter />
        </div>
      </div>
    </Container>
  )
})

export default Basket


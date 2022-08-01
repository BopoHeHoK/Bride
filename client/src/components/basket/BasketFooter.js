import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Form, Button } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { Context } from '../../index'
import ClearBasket from './modals/ClearBasket'
import { clearBasket, createOrder } from '../../http/productAPI'
import { fetchUser } from '../../http/userAPI'
import { createNotification } from '../../http/infoAPI'

const BasketFooter = observer(() => {
    const { user } = useContext(Context);
    const { product } = useContext(Context)

    const [type, setType] = useState(false)
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const [basketVisible, setBasketVisible] = useState(false)

    let token

    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    useEffect(() => {
        fetchUser(token.id).then(data => {
            user.setUserInfo(data)
        })
    }, [token.id])

    let count
    count = product.basketItems.length
    let arr = product.basketItems.map(item => item.price)
    let cost = 0
    cost = arr.reduce((partialSum, a) => partialSum + a, 0)
    let products = []

    product.basket.map(item =>
        products = ([...products, { basketId: item.basketId, productId: item.productId }])
    )

    const addOrder = () => {
        const formData = new FormData()
        formData.append("comment", comment)
        formData.append("receiptType", type)
        formData.append("address", address)
        formData.append("count", `${count}`)
        formData.append("cost", `${cost}`)
        formData.append("userId", token.id)
        formData.append("products", JSON.stringify(products))
        createOrder(formData)
        const formData2 = new FormData()
        formData2.append("notification", "Ваш заказ создан")
        formData2.append("userId", token.id)
        createNotification(formData2)
        clearBasket(token.id)
        setTimeout(() => document.location.reload(), 1000)
    }

    return (
        <Container className="mt-3 mb-4">
            {product.basketCount !== 0
                ?
                <div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button onClick={() => setBasketVisible(true)} className="btn-lg" variant="outline-danger">Очистить корзину</Button>
                    </div>
                    <hr />
                    <Container>

                        {type
                            ?
                            <div></div>
                            :
                            <div>
                                <h4>Адрес доставки</h4>
                                <Form.Control
                                    as="textarea"
                                    onChange={e => setAddress(e.target.value)}
                                    rows="3"
                                    placeholder="Введите Ваш адрес доставки"
                                />
                            </div>
                        }
                        <Form.Check
                            label="Заберу сам"
                            onChange={() => setType(true)}
                        />
                        {type
                            ?
                            <div className="mt-4 mb-4">
                                <h6>Забарть можно по адресу:</h6>
                                <p>г. Москва, ул. Мнёвники, 7 корпус 1</p>
                            </div>
                            :
                            <div></div>
                        }
                        <h4>Комментарий к заказу</h4>
                        <Form.Control
                            as="textarea"
                            onChange={e => setComment(e.target.value)}
                            rows="3"
                            placeholder="Введите комментарий"
                        />
                    </Container>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div>
                            <h2>Общая сумма заказа:</h2>
                        </div>
                        <div>
                            <h2>{cost} руб.</h2>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        {user.isAuth
                            ?
                            <Button onClick={() => addOrder()} className="btn-lg" variant="outline-dark">Сделать заказ</Button>
                            :
                            <div />
                        }
                    </div>
                    <ClearBasket show={basketVisible} onHide={() => setBasketVisible(false)} />
                </div>
                :
                <div>
                    <h1 className="text-center mt-5 mb-5">
                        Похоже Вы ещё ничего не выбрали
                    </h1>
                </div>
            }

        </Container>
    )
})

export default BasketFooter
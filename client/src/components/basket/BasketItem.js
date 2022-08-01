import React from 'react'
import { Image, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { PRODUCT_ROUTE } from '../../utils/consts'

const BasketItem = ({ basketItems }) => {
    const navigate = useNavigate();

    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    return (
        <div className="d-flex justify-content-center mt-2 mb-4">
            <Card style={{ width: "60%", borderRadius: 10 }} border="dimgray">
                <div className="d-flex justify-content-center">
                    <Image
                        onClick={() => navigate(PRODUCT_ROUTE + "/" + basketItems.id)}
                        src={process.env.REACT_APP_API_URL + basketItems.img}
                        style={{ width: "98%", cursor: "pointer", borderRadius: 10 }}
                        className="ms-2 mt-2 me-2"
                    />
                </div>
                <div className="mt-2">
                    <div style={{ height: 90 }} className="mb-4">
                        <h3>{basketItems.name}</h3>
                        <h5>{basketItems.description.substring(0, 60)}</h5>
                    </div>
                    <h3>{basketItems.price} руб.</h3>
                </div >

            </Card >
        </div>
    )
}

export default BasketItem
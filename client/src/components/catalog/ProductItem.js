import React, { useContext, useState } from 'react'
import '../../styles/App.css'
import { Image, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Context } from '../../index'
import { PRODUCT_ROUTE } from '../../utils/consts'
import RemoveProduct from './modals/RemoveProduct'
import { createProductInBasket, updateProduct } from '../../http/productAPI'


const ProductItem = ({ product }) => {
    const { user } = useContext(Context);
    const [productVisible, setProductVisible] = useState(false)

    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    const addProduct = (productId) => {
        const formData = new FormData()
        formData.append("basketId", token.id)
        formData.append("productId", productId)
        createProductInBasket(formData)
        const formData2 = new FormData()
        formData2.append("id", product.id)
        formData2.append("popularity", (product.popularity + 1))
        updateProduct(formData2)
    }

    const navigate = useNavigate();
    return (
        <Card style={{ width: 180, cursor: "pointer", borderRadius: 10 }} className="mt-4 m-4" border="dimgray">
            <Image
                onClick={() => navigate(PRODUCT_ROUTE + "/" + product.id)}
                className="image product"
                src={process.env.REACT_APP_API_URL + product.img}
                style={{ borderRadius: 10 }}
            />
            <div className="d-flex flex-column text-center mt-2">
                <div style={{ height: 90 }}>
                    <h6>{product.name}</h6>
                    <p>{product.description.substring(0, 30)}</p>
                </div>
                <h6>{product.price} руб.</h6>
                <div style={{ bottom: 10 }} className="d-flex justify-content-center text-center mb-2">
                    {user.isAdmin === "ADMIN"
                        ?
                        <Button
                            onClick={() => setProductVisible(true)}
                            style={{ width: "90%" }}
                            className="m-3"
                            variant="outline-danger"
                        >
                            Удалить
                        </Button>
                        :
                        <Button
                            onClick={() => addProduct(product.id)}
                            style={{ width: "90%" }}
                            className="m-3"
                            variant="outline-dark"
                        >
                            В избранное
                        </Button>
                    }
                </div>
            </div >
            <RemoveProduct show={productVisible} onHide={() => setProductVisible(false)} productId={product.id} />
        </Card >
    )
}

export default ProductItem
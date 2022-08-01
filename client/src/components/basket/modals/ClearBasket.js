import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { clearBasket } from '../../../http/productAPI'

const ClearBasket = ({ show, onHide }) => {
    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    const remove = () => {
        clearBasket(token.id)
        onHide()
        setTimeout(() => document.location.reload(), 1000)
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>
                    Вы точно хотите очистить корзину?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button
                    onClick={() => remove()}
                    variant="outline-danger"
                >
                    Да
                </Button>
                <Button
                    onClick={onHide}
                    variant="outline-dark"
                >
                    Отмена
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ClearBasket

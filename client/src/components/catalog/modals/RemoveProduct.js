import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { removeProduct } from '../../../http/productAPI'

const RemoveProduct = ({ show, onHide, productId }) => {
    const remove = () => {
        removeProduct(productId)
        onHide()
        setTimeout(() => document.location.reload(), 1000)
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>
                    Вы точно хотите удалить товар?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={remove} variant="outline-danger">Да</Button>
                <Button onClick={onHide} variant="outline-dark">Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveProduct

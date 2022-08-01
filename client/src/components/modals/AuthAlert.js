import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AuthAlert = ({ show, onHide, alert }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title className="m-auto" >
                    Ошибка при регистрации
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="m-auto" >
                <h5>{alert}</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} className="m-auto" variant="outline-dark">Понятно</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AuthAlert

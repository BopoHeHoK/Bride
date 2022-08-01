import React, { useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Context } from '../../../index'
import { removeFeedback } from '../../../http/infoAPI'

const RemoveFeedback = ({ show, onHide, feedbackId }) => {

    const { product } = useContext(Context)
    const remove = () => {
        removeFeedback(feedbackId)
        setTimeout(() => document.location.reload(), 1000)
        onHide()
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>
                    Вы точно хотите удалить отзыв?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={remove} variant="outline-danger">Да</Button>
                <Button onClick={onHide} variant="outline-dark">Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveFeedback

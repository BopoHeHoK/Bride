import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Row, Form, Button, Modal } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { createFeedback } from '../../../http/infoAPI'
import { Context } from '../../../index'
import { Col } from 'react-bootstrap'

const CreateFeedback = observer(({ show, onHide }) => {
    const { info } = useContext(Context)

    const [feedback, setFeedback] = useState('')

    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    const addFeedback = () => {
        const formData = new FormData()
        formData.append("type", info.feedbackType)
        formData.append("feedback", feedback)
        formData.append("userId", token.id)
        createFeedback(formData).then(data => onHide())
        setTimeout(() => document.location.reload(), 1000)
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title className="m-auto">
                    Добавить отзыв
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <Button
                        onClick={() => info.setFeedbackType("Положительный")}
                        active={info.feedbackType === "Положительный"}
                        className="m-2"
                        variant="outline-success"
                    >
                        Положительный
                    </Button>
                    <Button
                        onClick={() => info.setFeedbackType("Нейтральный")}
                        active={info.feedbackType === "Нейтральный"}
                        className="m-2"
                        variant="outline-dark"
                    >
                        Нейтральный
                    </Button>
                    <Button
                        onClick={() => info.setFeedbackType("Негативный")}
                        active={info.feedbackType === "Негативный"}
                        className="m-2"
                        variant="outline-danger"
                    >
                        Негативный
                    </Button>
                </div>
                <Form className="mt-3">
                    <Form.Control
                        onChange={e => setFeedback(e.target.value)}
                        className="mb-2"
                        placeholder="Написать отзыв"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addFeedback} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateFeedback

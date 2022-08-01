import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { createFitting } from '../../../http/infoAPI'

const CreateFitting = ({ show, onHide }) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const addFitting = () => {
        const formData = new FormData()
        formData.append("date", date)
        formData.append("time", time)
        createFitting(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    Добавить расписание примерки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setDate(e.target.value)}
                        className="mb-2"
                        placeholder="Введите дни"
                    />
                    <Form.Control
                        onChange={e => setTime(e.target.value)}
                        className="mb-2"
                        placeholder="Введите время"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addFitting} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateFitting

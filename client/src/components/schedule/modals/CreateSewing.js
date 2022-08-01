import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { createSewing } from '../../../http/infoAPI'

const CreateSewing = ({ show, onHide }) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const addSewing = () => {
        const formData = new FormData()
        formData.append("date", date)
        formData.append("time", time)
        createSewing(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    Добавить расписание пошива
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
                <Button onClick={addSewing} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateSewing

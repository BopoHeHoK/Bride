import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { updateSewing } from '../../../http/infoAPI'

const EditSewing = ({ show, onHide, id }) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const addSewing = () => {
        const formData = new FormData()
        formData.append("id", id)
        formData.append("date", date)
        formData.append("time", time)
        updateSewing(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    Редактировать расписание пошива
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
                <Button onClick={addSewing} variant="outline-success">Изменить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditSewing

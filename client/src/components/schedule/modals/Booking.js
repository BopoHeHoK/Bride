import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Form, Button, Modal } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { Dropdown } from 'react-bootstrap'
import { Context } from '../../../index'
import { createBooking } from '../../../http/infoAPI'


const Booking = observer(({ show, onHide }) => {
    const { info } = useContext(Context)

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    const addFitting = () => {
        const formData = new FormData()
        formData.append("type", info.bookingType)
        formData.append("date", date)
        formData.append("time", time)
        formData.append("userId", token.id)
        createBooking(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    Записаться
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle variant="outline-dark">{info.bookingType || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => info.setBookingType("Пошив")}>
                                Пошив
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => info.setBookingType("Примерка")}>
                                Примерка
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => info.setBookingType("")}>
                                Нет
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        onChange={e => setDate(e.target.value)}
                        className="mt-2 mb-2"
                        type="date"
                        placeholder="Введите день"
                    />
                    <Form.Control
                        onChange={e => setTime(e.target.value)}
                        className="mt-2 mb-2"
                        type="time"
                        placeholder="Введите время"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addFitting} variant="outline-success">Записаться</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default Booking
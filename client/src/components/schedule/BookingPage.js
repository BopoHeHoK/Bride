import React, { useEffect, useState } from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { createNotification, fetchOneBooking, updateBooking } from '../../http/infoAPI'
import { fetchUser } from '../../http/userAPI'

const BookingPage = () => {
    const [booking, setBooking] = useState({})
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchOneBooking(id).then(data => setBooking(data))
    }, [])

    let userId = booking.userId

    useEffect(() => {
        if (userId)
            fetchUser(booking.userId).then(data => setUser(data))
    }, [booking.userId])

    const accept = (status) => {
        const formData = new FormData()
        formData.append("id", id)
        formData.append("status", status)
        updateBooking(formData)
        const formData2 = new FormData()
        formData2.append("notification", `Вы записаны на ${booking.date} в ${booking.time}`)
        formData2.append("userId", userId)
        createNotification(formData2)
        setTimeout(() => document.location.reload(), 1000)
    }

    const remove = (status) => {
        const formData = new FormData()
        formData.append("id", id)
        formData.append("status", status)
        updateBooking(formData)
        const formData2 = new FormData()
        formData2.append("notification", `Вашу запись на ${booking.date}  в ${booking.time} отклонили`)
        formData2.append("userId", userId)
        createNotification(formData2)
        setTimeout(() => document.location.reload(), 1000)
    }

    return (
        <Container className=" mt-3">
            <Row className="d-flex justify-content-between mt-3">
                <Col md={5} className="mt-4">
                    <Row className="text-center mb-5">
                        <h1>Детали записи</h1>
                        <hr />
                    </Row>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Тип записи: </h3>
                        <div style={{ fontSize: 24 }}>{booking.type}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Дата: </h3>
                        <div style={{ fontSize: 24 }}>{booking.date}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Время: </h3>
                        <div style={{ fontSize: 24 }}>{booking.time}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Статус записи: </h3>
                        <div style={{ fontSize: 24 }}>{booking.status}</div>
                    </div>
                </Col>
                <Col md={5} className="mt-4">
                    <Row className="text-center mb-5">
                        <h1>Контакты клиента</h1>
                        <hr />
                    </Row>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Имя: </h3>
                        <div style={{ fontSize: 24 }}>{user.username}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Email: </h3>
                        <div style={{ fontSize: 24 }}>{user.email}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Телефон: </h3>
                        <div style={{ fontSize: 24 }}>{user.phone}</div>
                    </div>
                </Col>
            </Row>
            <div className="d-flex justify-content-end mt-5">
                <Button onClick={() => accept("Запись принята")} className="me-2" variant="outline-success">Принять запись</Button>
                <Button onClick={() => remove("Запись отклонена")} className="ms-2" variant="outline-danger">Отклонить запись</Button>
            </div>
        </Container >
    )
}

export default BookingPage


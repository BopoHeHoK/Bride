import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneMessage, removeMessage } from '../../http/infoAPI'
import { fetchUser } from '../../http/userAPI'

const MessagePage = observer(() => {
    const [message, setMessage] = useState({})
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchOneMessage(id).then(data => setMessage(data))
    }, [])

    let userId = message.userId

    useEffect(() => {
        if (userId)
            fetchUser(message.userId).then(data => setUser(data))
    }, [message.userId])

    const removeItem = () => {
        removeMessage(message.id)
    }

    return (
        <Container className=" mt-3">
            <Row className="d-flex justify-content-between mt-3">
                <Col md={5} className="mt-4">
                    <Row className="text-center mb-5">
                        <h1>Детали сообщения</h1>
                        <hr />
                    </Row>
                    <h3>Сообщение: </h3>
                    <div style={{ fontSize: 24 }}>{message.message}</div>
                </Col>
                <Col md={5} className="mt-4">
                    <Row className="text-center mb-5">
                        <h1>Контакты клиента</h1>
                        <hr />
                    </Row>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Имя: </h3>
                        <div style={{ fontSize: 24 }}>{message.username || user.username}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Email: </h3>
                        <div style={{ fontSize: 24 }}>{message.email || user.email}</div>
                    </div>
                </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3">
                <Button
                    onClick={() => removeItem()}
                    className="ms-2"
                    variant="outline-danger"
                >
                    Удалить сообщение
                </Button>
            </div>
        </Container >
    )
})

export default MessagePage


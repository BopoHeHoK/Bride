import React from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { MESSAGE_ROUTE } from '../../utils/consts'
import { removeMessage } from '../../http/infoAPI'

const MessageItem = ({ messageItem }) => {
    const navigate = useNavigate();

    const removeItem = () => {
        removeMessage(messageItem.id)
    }

    return (
        <Card className="mt-2 mb-2">
            <Row className="mt-2">
                <Col md={2}>
                    <h6>№ {messageItem.id}</h6>
                </Col>
                <Col md={3}>
                    <p>{messageItem.username}</p>
                </Col>
                <Col md={3}>
                    <p>{messageItem.email}</p>
                </Col>
                <Col md={2}>
                    <Button
                        onClick={() => navigate(MESSAGE_ROUTE + "/" + messageItem.id)}
                        className="m-3"
                        variant="outline-dark"
                    >
                        Посмотреть
                    </Button>
                </Col>
                <Col md={2}>
                    <Button
                        onClick={() => removeItem()}
                        className="m-3"
                        variant="outline-danger"
                    >
                        Удалить
                    </Button>
                </Col>
            </Row>

        </Card>
    )
}

export default MessageItem
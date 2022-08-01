import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import Sorting from './Sorting'
import MessageItem from './MessageItem'

const MessagesList = observer(() => {
    const { info } = useContext(Context)

    return (
        <Container style={{ width: "80%" }} align="center">
            <div className="d-flex justify-content-between mt-4 mb-4 me-2">
                <h4>Всего: {info.messageCount}</h4>
                <Sorting />
            </div>
            <Row className="mt-2" >
                <Col md={2}>
                    <h6>Номер сообщения:</h6>
                </Col>
                <Col md={3}>
                    <h6>Имя:</h6>
                </Col>
                <Col md={3}>
                    <h6>Email:</h6>
                </Col>
            </Row>
            <Row className="d-flex">
                {info.message != null
                    ?
                    info.message.map(messageItem =>
                        <MessageItem key={messageItem.id} messageItem={messageItem} />)
                    :
                    <div></div>
                }
            </Row>
        </Container>
    );
});

export default MessagesList;

import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import Sorting from './NotificationSorting'
import NotificationItem from './NotificationItem'

const NotificationList = observer(() => {
    const { info } = useContext(Context)

    return (
        <Container style={{ width: "80%" }} align="center">
            <div className="d-flex justify-content-between mt-4 mb-4 me-2">
                <h4>Всего: {info.notificationCount}</h4>
                <Sorting />
            </div>
            <Row className="d-flex justify-content-between mt-2" >
                <Col md={2}>
                    <h6>Номер:</h6>
                </Col>
                <Col md={4}>
                    <h6>Уведомление:</h6>
                </Col>
            </Row>
            <Row className="d-flex">
                {info.notification != null
                    ?
                    info.notification.map(notificationItem =>
                        <NotificationItem key={notificationItem.id} notificationItem={notificationItem} />)
                    :
                    <div></div>
                }
            </Row>
        </Container>
    );
});

export default NotificationList;

import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'

const NotificationItem = ({ notificationItem }) => {

    return (
        <Card className="mt-2 mb-2">
            <Row className="d-flex justify-content-between mt-2" >
                <Col md={2}>
                    <h6>№ {notificationItem.id}</h6>
                </Col>
                <Col md={4}>
                    <p>{notificationItem.notification}</p>
                </Col>
            </Row>
        </Card>
    )
}

export default NotificationItem
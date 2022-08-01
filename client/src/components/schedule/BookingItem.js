import React from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BOOKING_ROUTE } from '../../utils/consts'

const BookingItem = ({ bookingItem }) => {
    const navigate = useNavigate();

    return (
        <Card className="mt-2 mb-2">
            <Row className="mt-2">
                <Col md={2}>
                    <h6>№ {bookingItem.id}</h6>
                </Col>
                <Col md={2}>
                    <p>{bookingItem.type}</p>
                </Col>
                <Col md={2}>
                    <p>{bookingItem.date}</p>
                </Col>
                <Col md={2}>
                    <p>{bookingItem.time}</p>
                </Col>
                <Col md={2}>
                    <p>{bookingItem.status}</p>
                </Col>
                <Col md={2}>
                    <Button onClick={() => navigate(BOOKING_ROUTE + "/" + bookingItem.id)}
                        className="m-3"
                        variant="outline-dark"
                    >
                        Посмотреть
                    </Button>
                </Col>
            </Row>

        </Card>
    )
}

export default BookingItem
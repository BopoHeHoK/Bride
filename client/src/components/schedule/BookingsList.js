import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import Sorting from './Sorting'
import BookingItem from './BookingItem'

const BookingsList = observer(() => {
    const { info } = useContext(Context)

    return (
        <Container align="center">
            <div className="d-flex justify-content-between mt-4 mb-4 me-2">
                <h4>Всего: {info.bookingCount}</h4>
                <Sorting />
            </div>
            <Row className="mt-2">
                <Col md={2}>
                    <h6>Номер записи:</h6>
                </Col>
                <Col md={2}>
                    <h6>Тип записи:</h6>
                </Col>
                <Col md={2}>
                    <h6>Дата:</h6>
                </Col>
                <Col md={2}>
                    <h6>Время:</h6>
                </Col>
                <Col md={2}>
                    <h6>Статус:</h6>
                </Col>
            </Row>
            <Row className="d-flex">
                {info.booking.map(bookingItem =>
                    <BookingItem key={bookingItem.id} bookingItem={bookingItem} />
                )}
            </Row>
        </Container>
    );
});

export default BookingsList;

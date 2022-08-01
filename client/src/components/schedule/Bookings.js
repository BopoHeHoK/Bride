import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Row, Container, Col } from 'react-bootstrap'
import { Context } from '../../index'
import BookingsList from './BookingsList'
import Pages from './Pages'
import TypeBar from './TypeBar'
import StatusBar from './StatusBar'
import { fetchBooking } from '../../http/infoAPI'

const Bookings = observer(() => {
    const { info } = useContext(Context)
    const { user } = useContext(Context)

    useEffect(() => {
        fetchBooking(null, null, null, info.limitBooking, info.pageBooking).then(data => {
            info.setBooking(data.rows)
            info.setBookingCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchBooking(info.bookingSort, info.bookingType, info.bookingStatus, info.limitBooking, info.pageBooking).then(data => {
            info.setBooking(data.rows)
            info.setBookingCount(data.count)
        })
    }, [info.bookingSort, info.bookingType, info.bookingStatus, info.limitBooking, info.pageBooking])

    return (
        <Container>
            {
                user.isAdmin === "ADMIN"
                    ?
                    <Row>
                        <Col md={3}>
                            <TypeBar />
                            <StatusBar />
                        </Col>
                        <Col md={9}>
                            <BookingsList />
                            <div className="d-flex justify-content-center">
                                <Pages />
                            </div>
                        </Col>
                    </Row>
                    :
                    <div>
                        <h1>Доступ к странице имеют только администраторы!</h1>
                    </div>
            }
        </Container>
    )
})

export default Bookings



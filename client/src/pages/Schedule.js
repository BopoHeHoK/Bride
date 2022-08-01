import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import SewingList from '../components/schedule/SewingList'
import FittingList from '../components/schedule/FittingList'
import { Context } from '../index'
import Booking from '../components/schedule/modals/Booking'
import { BOOKING_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { fetchFitting, fetchSewing } from '../http/infoAPI'


const Schedule = observer(() => {
    const { user } = useContext(Context)
    const { info } = useContext(Context)
    const navigate = useNavigate()

    const [bookingVisible, setBookingVisible] = useState(false)

    useEffect(() => {
        fetchFitting().then(data => { info.setFitting(data) })
        fetchSewing().then(data => { info.setSewing(data) })
    }, [])

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <SewingList />
                <FittingList />
                {user.isAuth
                    ?
                    user.isAdmin === "ADMIN"
                        ?
                        <Button
                            onClick={() => navigate(BOOKING_ROUTE)}
                            style={{ width: "30%" }}
                            className="mt-2 mb-2"
                            variant="dark"
                        >
                            Записи
                        </Button>
                        :
                        <Button
                            onClick={() => setBookingVisible(true)}
                            style={{ width: "30%" }}
                            className="mt-2 mb-2"
                            variant="dark"
                        >
                            Записаться
                        </Button>
                    :
                    <Button
                        onClick={() => navigate(LOGIN_ROUTE)}
                        style={{ width: "30%" }}
                        className="mt-2 mb-2"
                        variant="dark"
                    >
                        Записаться
                    </Button>
                }
            </Row>
            <Booking show={bookingVisible} onHide={() => setBookingVisible(false)} />
        </Container >
    )
})

export default Schedule


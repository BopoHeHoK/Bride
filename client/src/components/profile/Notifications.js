import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { Context } from '../../index'
import NotificationList from './NotificationList'
import Pages from './PagesNotification'
import { fetchNotification } from '../../http/infoAPI'

const Notifications = observer(() => {
    const { info } = useContext(Context)
    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    useEffect(() => {
        fetchNotification(token.id, null, info.limitNotification, info.pageNotification).then(data => {
            info.setNotification(data.rows)
            info.setNotificationCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchNotification(token.id, info.notificationSort, info.limitNotification, info.pageNotification).then(data => {
            info.setNotification(data.rows)
            info.setNotificationCount(data.count)
        })
    }, [token.id, info.notificationSort, info.limitNotification, info.pageNotification])

    return (
        <Container className="mt-3">
            <Row>
                <NotificationList />
                <div className="d-flex justify-content-center">
                    <Pages />
                </div>
            </Row>
        </Container >
    )
})

export default Notifications;

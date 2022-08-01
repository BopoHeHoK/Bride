import React, { useContext, useEffect, useState } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { Context } from '../../index'
import RemoveFeedback from './modals/RemoveFeedback'
import { fetchUser } from '../../http/userAPI'

const FeedbackItem = ({ feedbackItem }) => {

    const { user } = useContext(Context)
    const [userr, setUserr] = useState({})
    const [removeFeedbackVisible, setRemoveFeedbackVisible] = useState(false)

    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    let userId = feedbackItem.userId

    useEffect(() => {
        if (userId)
            fetchUser(feedbackItem.userId).then(data => setUserr(data))
    }, [])

    return (
        <Card className="mt-2 mb-2">
            <Row className="mt-2">
                {feedbackItem.userId === token.id || user.isAdmin === "ADMIN"
                    ?
                    <div>
                        <Col md={10}>
                            <h6>{userr.username}</h6>
                            <hr />
                            <h6>{feedbackItem.type}</h6>
                            <p>{feedbackItem.feedback}</p>
                        </Col>
                        <Col md={2}>
                            <Button
                                onClick={() => setRemoveFeedbackVisible(true)}
                                className="mb-3"
                                variant="outline-danger"
                            >
                                Удалить
                            </Button>

                        </Col>
                    </div>
                    :
                    <Col md={12}>
                        <h6>{userr.username}</h6>
                        <hr />
                        <p>{feedbackItem.feedback}</p>
                    </Col>
                }
            </Row>
            <RemoveFeedback show={removeFeedbackVisible} onHide={() => setRemoveFeedbackVisible(false)} feedbackId={feedbackItem.id} />
        </Card>
    )
}

export default FeedbackItem
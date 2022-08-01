import React, { useContext, useState } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import EditSewing from './modals/EditSewing'
import { removeSewing } from '../../http/infoAPI'

const SewingItem = ({ sewingItem }) => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const [sevingEditVisible, setSewingEditVisible] = useState(false)

    const remove = () => {
        removeSewing(sewingItem.id)
    }

    return (
        <Card className="mt-2 mb-2">
            <Row className="mt-2">
                <Col md={4}>
                    <p className="text-center">{sewingItem.date}</p>
                </Col>
                <Col md={4}>
                    <p className="text-center">{sewingItem.time}</p>
                </Col>
                {user.isAdmin === "ADMIN"
                    ?
                    <Col md={4} className="d-flex justify-content-end">
                        <Button
                            onClick={() => setSewingEditVisible(true)}
                            className="m-3"
                            variant="outline-dark"
                        >
                            Редактировать
                        </Button>
                        <Button
                            onClick={() => remove()}
                            className="m-3"
                            variant="outline-danger"
                        >
                            Удалить
                        </Button>
                    </Col>
                    :
                    <div></div>
                }
            </Row>
            <EditSewing show={sevingEditVisible} onHide={() => setSewingEditVisible(false)} id={sewingItem.id} />
        </Card>
    )
}

export default SewingItem
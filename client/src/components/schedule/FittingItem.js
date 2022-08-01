import React, { useContext, useState } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import EditFitting from './modals/EditFitting'
import { removeFitting } from '../../http/infoAPI'

const FittingItem = ({ fittingItem }) => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const [fittingEditVisible, setFittingEditVisible] = useState(false)

    const remove = () => {
        removeFitting(fittingItem.id)
    }
    return (
        <Card className="mt-2 mb-2">
            <Row className="mt-2">
                <Col md={4}>
                    <p className="text-center">{fittingItem.date}</p>
                </Col>
                <Col md={4}>
                    <p className="text-center">{fittingItem.time}</p>
                </Col>
                {user.isAdmin === "ADMIN"
                    ?
                    <Col md={4} className="d-flex justify-content-end">
                        <Button
                            onClick={() => setFittingEditVisible(true)}
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
            <EditFitting show={fittingEditVisible} onHide={() => setFittingEditVisible(false)} id={fittingItem.id} />
        </Card>
    )
}

export default FittingItem
import React, { useContext } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import { HISTORY_ROUTE } from '../../utils/consts'

const HistoryItem = ({ historyItem }) => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    return (
        <Card className="mt-2 mb-2">
            <Row className="mt-2">
                <Col md={1}>
                    <h6>№ {historyItem.id}</h6>
                </Col>
                <Col md={3}>
                    <p>{historyItem.cost}</p>
                </Col>
                <Col md={2}>
                    <p>{historyItem.count}</p>
                </Col>
                <Col md={3}>
                    <p>{historyItem.status}</p>
                </Col>
                <Col md={2}>
                    <Button onClick={() => navigate(HISTORY_ROUTE + "/" + historyItem.id)}
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

export default HistoryItem
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import HistoryItem from './HistoryItem'
import HistorySorting from './HistorySorting'

const HistoryList = observer(() => {
    const { info } = useContext(Context)

    return (
        <Container style={{ width: "80%" }} align="center">
            <div className="d-flex justify-content-between mt-4 mb-4 me-2">
                <h4>Всего: {info.historyCount}</h4>
                <HistorySorting />
            </div>
            <Row className="m-2" >
                <Col md={1}>
                    <h6>Номер заказа:</h6>
                </Col>
                <Col md={3}>
                    <h6>Общая цена:</h6>
                </Col>
                <Col md={2}>
                    <h6>Количество товаров:</h6>
                </Col>
                <Col md={3}>
                    <h6>Статус заказа:</h6>
                </Col>
            </Row>
            <Row className="d-flex">
                {info.history != null
                    ?
                    info.history.map(historyItem =>
                        <HistoryItem key={historyItem.id} historyItem={historyItem} />)
                    :
                    <div></div>
                }
            </Row>
        </Container>
    );
});

export default HistoryList;

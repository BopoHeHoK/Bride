import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CreateSewing from './modals/CreateSewing'
import SewingItem from './SewingItem'

const SewingList = observer(() => {
    const { user } = useContext(Context);
    const { info } = useContext(Context)

    const [sevingCreateVisible, setSewingCreateVisible] = useState(false)

    return (
        <Container>
            <h1 className="text-center">Расписание пошива</h1>
            <Row>
                <Col md={4}>
                    <h5 className="text-center">Дни работы:</h5>
                </Col>
                <Col md={4}>
                    <h5 className="text-center">Время работы:</h5>
                </Col>
            </Row>
            <Row>
                {info.sewing.lenght !== null
                    ?
                    info.sewing.map(sewingItem =>
                        <SewingItem key={sewingItem.id} sewingItem={sewingItem} />
                    )
                    : console.log()
                }
            </Row>
            {
                user.isAdmin === "ADMIN"
                    ?
                    <Button onClick={() => setSewingCreateVisible(true)} style={{ float: "right" }} className="mt-2 mb-2" variant="outline-success">Добавить расписание пошива</Button>
                    :
                    <div></div>
            }
            <CreateSewing show={sevingCreateVisible} onHide={() => setSewingCreateVisible(false)} />
        </Container >

    );
});

export default SewingList;

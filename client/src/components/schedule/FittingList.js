import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Row, Container, Button, Col } from 'react-bootstrap'
import { Context } from '../../index'
import CreateFitting from './modals/CreateFitting'
import FittingItem from './FittingItem'


const FittingList = observer(() => {
    const { user } = useContext(Context);
    const { info } = useContext(Context)

    const [fittingCreateVisible, setFittingCreateVisible] = useState(false)

    return (
        <Container>
            <h1 className="text-center">Расписание примерки</h1>
            <Row>
                <Col md={4}>
                    <h5 className="text-center">Дни работы:</h5>
                </Col>
                <Col md={4}>
                    <h5 className="text-center">Время работы:</h5>
                </Col>
            </Row>
            <Row>
                {info.fitting.lenght !== null
                    ?
                    info.fitting.map(fittingItem =>
                        <FittingItem key={fittingItem.id} fittingItem={fittingItem} />
                    )
                    : console.log()
                }
            </Row>
            {user.isAdmin === "ADMIN"
                ?
                <Button onClick={() => setFittingCreateVisible(true)} style={{ float: "right" }} className="mt-2 mb-2" variant="outline-success">Добавить расписание примерки</Button>
                :
                <div></div>
            }
            <CreateFitting show={fittingCreateVisible} onHide={() => setFittingCreateVisible(false)} />
        </Container>

    );
});

export default FittingList;

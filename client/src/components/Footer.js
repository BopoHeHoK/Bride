import React from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { CATALOG_ROUTE, FEEDBACK_ROUTE, CONTACT_ROUTE } from '../utils/consts'


const Footer = observer(() => {
    return (
        <div style={{ width: "100%", backgroundColor: "DimGray", color: "Gainsboro" }} className="footer" >
            <Container className="mt-5 pt-3 pb-3">
                <Row bg="dark">
                    <Col md={3}>
                        <h4>ИНФОРМАЦИЯ</h4>
                        <hr />
                        <Nav.Link href={CATALOG_ROUTE} style={{ color: "Gainsboro" }} >Каталог</Nav.Link>
                        <Nav.Link href={FEEDBACK_ROUTE} style={{ color: "Gainsboro" }} >Отзовы</Nav.Link>
                        <Nav.Link href={CONTACT_ROUTE} style={{ color: "Gainsboro" }} >Контакты</Nav.Link>
                    </Col>
                    <Col md={3}>
                        <h4>АДРЕС И ВРЕМЯ РАБОТЫ</h4>
                        <hr />
                        <p>г. Москва, ул. Мнёвники, 7 корпус 1</p>
                        <p>пн-вс: 10:00 - 20:00</p>
                        <p>без перерыва</p>
                    </Col>
                    <Col md={3}>
                        <h4>КОНТАКТЫ</h4>
                        <hr />
                        <p>8 (968) 038-15-15</p>
                        <p>8 (967) 065-34-98</p>
                    </Col>
                    <Col md={3}>
                        <h4>МЫ В СЕТИ</h4>
                        <hr />
                        <Nav.Link href={CATALOG_ROUTE} style={{ color: "Gainsboro" }} >Facebook</Nav.Link>
                        <Nav.Link href={FEEDBACK_ROUTE} style={{ color: "Gainsboro" }} >Telegram</Nav.Link>
                        <Nav.Link href={CONTACT_ROUTE} style={{ color: "Gainsboro" }} >Instagram</Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
});

export default Footer;


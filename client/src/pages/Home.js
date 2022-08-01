import React from 'react'
import '../styles/App.css'
import { Container, Button, CardGroup, Card, Row, Col } from 'react-bootstrap'
import CarouselBox from '../components/CarouselBox'
import weddingDress from '../assets/wedding-dress.jpg'
import veil from '../assets/veil.jpg'
import bijouterie from '../assets/bijouterie.png'
import first_icon from '../assets/icon-1.jpg'
import second_icon from '../assets/icon-2.png'
import third_icon from '../assets/icon-3.jpg'
import fourth_icon from '../assets/icon-4.jpg'
import { CATALOG_ROUTE, CONTACT_ROUTE } from '../utils/consts'

const Home = () => {
    return (
        <div>
            <CarouselBox />
            <Container className="text-center mt-4">
                <h2>Наш каталог</h2>
                <CardGroup>
                    <Card className="m-4" bg="light">
                        <Card.Img src={weddingDress} className="image home" variant="top" />
                        <Card.Body>
                            <Card.Title>Свадебные платья</Card.Title>
                            <Button href={CATALOG_ROUTE} variant="outline-dark" >Перейти</Button>
                        </Card.Body>
                    </Card>
                    <Card className="m-4" bg="light">
                        <Card.Img src={veil} className="image home" variant="top" />
                        <Card.Body>
                            <Card.Title>Фата</Card.Title>
                            <Button href={CATALOG_ROUTE} variant="outline-dark">Перейти</Button>
                        </Card.Body>
                    </Card>
                    <Card className="m-4" bg="light">
                        <Card.Img src={bijouterie} className="image home" variant="top" />
                        <Card.Body>
                            <Card.Title>Свадебная бижутерия</Card.Title>
                            <Button href={CATALOG_ROUTE} variant="outline-dark">Перейти</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <Container>
                <h2 className="text-center mt-4">О нашем салоне “Bride”</h2>
                <p className="text">«Bride»- новый салон свадебных платьев в Москве!
                    Это современное сочетание классической элегантности и утонченной моды.
                    Наши коллекции роскошны и женственны.
                    В каждой можно найти уникальные наряды.
                    Независимо от того, какое платье вы ищите, простое и изящное или сложное и в то же время очаровательное.
                    Мы уверены, что у нас вы можете найти огромный ассортимент, которого не предложит ни один другой свадебный магазин Москвы.
                </p>
            </Container>
            <Container className="text-center mt-4">
                <h2>Чем наш салон отличается от других:</h2>
                <Row className="d-flex justify-content-between">
                    <Col md={2} className="m-4">
                        <img src={first_icon} variant="top" />
                        <p>Примерка в нашем салоне абсолютно бесплатная - ежедневно!</p>
                    </Col>
                    <Col md={2} className="m-4">
                        <img src={second_icon} variant="top" />
                        <p>Цены на наши наряды ниже на 30-50% от рыночных по Москве!</p>
                    </Col>
                    <Col md={2} className="m-4">
                        <img src={third_icon} variant="top" />
                        <p>При покупке в первый день примерки Вы получите скидку!</p>
                    </Col>
                    <Col md={2} className="m-4">
                        <img src={fourth_icon} variant="top" />
                        <p>Консультанты салона уделяют время только Вам и не отвлекаются на других клиентов</p>
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <h2>Остались вопросы?</h2>
                    <Button href={CONTACT_ROUTE} style={{ borderRadius: 30 }} className="m-4" variant="outline-dark">Связаться с нами</Button>
                </div>
            </Container >
        </div >
    )
}

export default Home

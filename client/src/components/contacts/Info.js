import React from 'react'
import { Container } from 'react-bootstrap'
const Info = () => {

    return (
        <Container className="text-center">
            <h3 className="mt-3">АДРЕС И ВРЕМЯ РАБОТЫ</h3>
            <div className="mt-3 mb-3">
                <h5>Наш адрес:</h5>
                <p>г. Москва, ул. Мнёвники, 7 корпус 1</p>
                <h5>Время работы: </h5>
                <p>пн-вс: 10:00 - 20:00 <br /> без перерыва</p>
            </div>
            <div className="mt-5 mb-3">
                <h3 className="mt-3 mb-3">КОНТАКТЫ</h3>
                <h5 type="phone">8 (968) 038-15-15</h5>
                <h5 type="phone">8 (967) 065-34-98</h5>
            </div>
        </Container>
    )
}

export default Info

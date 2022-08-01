import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../../index'

const TypeBar = observer(() => {
    const { info } = useContext(Context)

    return (
        <ListGroup className="mt-4">
            <h6>Выбрать тип записей</h6>
            <ListGroup.Item
                onClick={() => info.setBookingType("Пошив")}
                active={info.bookingType === "Пошив"}
                style={{ cursor: "pointer" }}
            >
                Пошив
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => info.setBookingType("Примерка")}
                active={info.bookingType === "Примерка"}
                style={{ cursor: "pointer" }}
            >
                Примерка
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => info.setBookingType("")}
                active={info.bookingType === ""}
                style={{ cursor: "pointer" }}
            >
                Без типа
            </ListGroup.Item>
        </ListGroup >
    );
});

export default TypeBar;

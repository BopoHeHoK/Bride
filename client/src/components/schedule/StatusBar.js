import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../../index'

const StatusBar = observer(() => {
    const { info } = useContext(Context)

    return (
        <ListGroup className="mt-4">
            <h6>Выбрать статус записей</h6>
            <ListGroup.Item
                onClick={() => info.setBookingStatus("Запись создана")}
                active={info.bookingStatus === "Запись создана"}
                style={{ cursor: "pointer" }}
            >
                Запись создана
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => info.setBookingStatus("Запись принята")}
                active={info.bookingStatus === "Запись принята"}
                style={{ cursor: "pointer" }}
            >
                Запись принята
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => info.setBookingStatus("Запись отклонена")}
                active={info.bookingStatus === "Запись отклонена"}
                style={{ cursor: "pointer" }}
            >
                Запись отклонена
            </ListGroup.Item>
        </ListGroup >
    );
});

export default StatusBar;

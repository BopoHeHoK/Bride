import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../../index'

const StatusBar = observer(() => {
    const { product } = useContext(Context)

    return (
        <ListGroup>
            <ListGroup.Item
                onClick={() => product.setOrderStatus("Заказ создан")}
                active={product.orderStatus === "Заказ создан"}
                style={{ cursor: "pointer" }}
                variant="success"
            >
                Заказ создан
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => product.setOrderStatus("Заказ принят")}
                active={product.orderStatus === "Заказ принят"}
                style={{ cursor: "pointer" }}
            >
                Заказ принят
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => product.setOrderStatus("Заказ готов")}
                active={product.orderStatus === "Заказ готов"}
                style={{ cursor: "pointer" }}
            >
                Заказ готов
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => product.setOrderStatus("Заказ выдан")}
                active={product.orderStatus === "Заказ выдан"}
                style={{ cursor: "pointer" }}
            >
                Заказ выдан
            </ListGroup.Item>
            <ListGroup.Item
                onClick={() => product.setOrderStatus("Заказ отклонён")}
                active={product.orderStatus === "Заказ отклонён"}
                style={{ cursor: "pointer" }}
                variant="danger"
            >
                Заказ отменён
            </ListGroup.Item>
        </ListGroup >
    );
});

export default StatusBar;

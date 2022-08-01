import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'


const TypeBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    return (
        <ListGroup>
            <ListGroup.Item onClick={() => user.setContactTypeBar(0)} style={{ cursor: "pointer" }}>Связаться с нами</ListGroup.Item>
            <ListGroup.Item onClick={() => user.setContactTypeBar(1)} style={{ cursor: "pointer" }}>Наши сотрудники</ListGroup.Item>
            <ListGroup.Item onClick={() => user.setContactTypeBar(2)} style={{ cursor: "pointer" }}>Информация</ListGroup.Item>
        </ListGroup >

    );
});

export default TypeBar;

import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { HOME_ROUTE } from '../../utils/consts'
import { Context } from '../../index'


const TypeBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        navigate(HOME_ROUTE)
    }

    return (
        <ListGroup className="mt-3">
            <ListGroup.Item onClick={() => user.setProfileTypeBar(0)} style={{ cursor: "pointer" }}>Профиль</ListGroup.Item>
            <ListGroup.Item onClick={() => user.setProfileTypeBar(1)} style={{ cursor: "pointer" }}>Уведомления</ListGroup.Item>
            <ListGroup.Item onClick={() => user.setProfileTypeBar(2)} style={{ cursor: "pointer" }}>История заказов</ListGroup.Item>
            <ListGroup.Item onClick={() => logOut()} style={{ cursor: "pointer" }}>Выйти из аккаунта</ListGroup.Item>
        </ListGroup >

    );
});

export default TypeBar;

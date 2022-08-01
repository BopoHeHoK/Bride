import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Button, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import { editProfile } from '../../http/userAPI'

const Info = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate();
    const [changeInfo, setChangeInfo] = useState(false)

    const [username, setUsername] = useState(user.userInfo.username)
    const [email, setEmail] = useState(user.userInfo.email)
    const [phone, setPhone] = useState(user.userInfo.phone)

    const saveChanges = () => {
        const formData = new FormData()
        formData.append("id", user.userInfo.id)
        formData.append("username", username)
        formData.append("email", email)
        formData.append("phone", phone)
        editProfile(formData)
        setChangeInfo(false)
    }

    return (
        <Container className="mt-3">
            {changeInfo
                ?
                <Row>
                    <div className="text-align-center">
                        <h1>Ваш профиль</h1>
                        <h4>Ваше Имя</h4>
                        <Form.Control type="text" defaultValue={username} onChange={e => setUsername(e.target.value)} />
                        <h4>Ваш Email</h4>
                        <Form.Control type="text" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                        <h4>Ваш Телефон</h4>
                        <Form.Control type="text" defaultValue={phone} onChange={e => setPhone(e.target.value)} />
                        <hr />
                    </div>
                    <div className="text-center" >
                        <Button onClick={() => saveChanges()} variant="outline-dark">Сохранить изменения</Button>
                    </div>
                </Row>
                :
                <Row>
                    <div className="text-align-center">
                        <h1>Ваш профиль</h1>
                        <h4>Ваше Имя</h4>
                        {username}
                        <h4>Ваш Email</h4>
                        {email}
                        <h4>Ваш Телефон</h4>
                        {phone}
                        <hr />
                    </div>
                    <div className="text-center" >
                        <Button onClick={() => setChangeInfo(true)} variant="outline-dark">Изменить данные</Button>
                    </div>
                </Row>
            }
        </Container >
    )
})

export default Info;

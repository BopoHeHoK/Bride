import React, { useContext, useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { createMessage } from '../../http/infoAPI'
import { Context } from '../../index'

const ContactForm = () => {
    const { user } = useContext(Context)
    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState("")

    let userId
    {
        user.isAuth
            ?
            userId = user.userInfo.id
            :
            userId = null
    }

    const addMessage = () => {
        if (email.match(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)) {
            const formData = new FormData()
            formData.append("message", message)
            formData.append("username", username)
            formData.append("email", email)
            formData.append("userId", userId)
            createMessage(formData)
            setTimeout(() => document.location.reload(), 1000)
        } else {
            setEmailError("Введите корректный email")
        }
    }

    return (
        <div>
            <Container>
                <h2 className="text-center">Остались вопросы?</h2>
                <h3>Мы всегда с радостью ответим на все Ваши вопросы, замечания и предложения</h3>
                <Form style={{ width: "1000px" }}>
                    <Form.Group>
                        <Form.Label>
                            Ваше имя
                        </Form.Label>
                        <Form.Control
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            placeholder="Имя..."
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Ваш email
                        </Form.Label>
                        <Form.Control
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email..."
                        />
                        <p style={{ color: "red" }} className="m-1">{emailError}</p>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Ваши вопросы, замечания или предложения
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            onChange={e => setMessage(e.target.value)}
                            rows="3"
                        />
                    </Form.Group>
                    <Button
                        onClick={() => addMessage()}
                        className="mt-2"
                        variant="outline-success"
                    >
                        Отправить
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default ContactForm

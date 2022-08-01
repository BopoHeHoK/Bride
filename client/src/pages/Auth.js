import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import profile from '../assets/profile.png'
import { login, registration } from '../http/userAPI'

const Auth = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")

  const click = async () => {
    try {
      let data
      if (email.match(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)) {
        if (isLogin) {
          data = await login(email, password)
        } else {
          data = await registration(username, email, phone, profile, password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(HOME_ROUTE)
        setEmailError("")
      }
      else {
        setEmailError("Введите корректный email")
      }
    } catch (error) {
      setEmailError(error.response.data.message)
    }
  }

  return (
    <Container
      style={{ height: window.innerHeight - 54 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: 600 }} className="p-5">
        {isLogin
          ?
          <div>
            <h2 className="d-flex justify-content-center m-auto">Авторизация</h2>
            <Form className="d-flex flex-column">
              <Form.Control
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-3"
                placeholder="Введите email"
              />
              <p style={{ color: "red" }} className="m-1">{emailError}</p>
              <Form.Control
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-3"
                type="password"
                placeholder="Введите пароль"
              />
              <div className="d-flex justify-content-between mt-3">
                <div className="pt-2">
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                </div>
                <Button onClick={click} className="ps-3 pe-3" variant="outline-dark"> Войти </Button>
              </div>
            </Form>
          </div>
          :
          <div>
            <h2 className="d-flex justify-content-center m-auto">Регистрация</h2>
            <Form className="d-flex flex-column">
              <Form.Control
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="mt-3"
                placeholder="Введите полное имя"
              />
              <Form.Control
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-3"
                placeholder="Введите email"
              />
              <p style={{ color: "red" }} className="m-1">{emailError}</p>
              <Form.Control
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="mt-3"
                placeholder="Введите телефон"
              />
              <Form.Control
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-3"
                type="password"
                placeholder="Введите пароль"
              />
              <div className="d-flex justify-content-between mt-3">
                <div className="pt-2">
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
                <Button onClick={click} className="ps-3 pe-3" variant="outline-dark">Зарегистрироваться</Button>
              </div>
            </Form>
          </div>
        }
      </Card >
    </Container >
  )
}
export default Auth

import React, { useContext, useEffect, useState } from 'react'
import './styles/App.css'
import { observer } from 'mobx-react-lite'
import { Spinner } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Context } from './index'
import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import { check, fetchUser } from './http/userAPI'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  let token
  try {
    token = jwt_decode(localStorage.getItem('token'))
  } catch (err) {
    console.log('Error: ')
  }

  useEffect(() => {
    if (token)
      fetchUser(token.id).then(data => {
        user.setUserInfo(data)
      })
  }, [])

  useEffect(() => {
    check().then(data => {
      user.setIsAuth(true)
      user.setUser(true)
      user.setIsAdmin(token.role)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
})

export default App;

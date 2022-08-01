import React, { useContext } from 'react'
import '../styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from '../routes'
import { Context } from '../index'


const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAdmin === "ADMIN" && adminRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      )}
      {user.isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      )}
    </Routes>
  )
}


export default AppRouter
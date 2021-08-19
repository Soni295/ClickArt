import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route,
  Redirect } from 'react-router-dom'
import Navbar from './Componentes/Navbar'
import Foot from './Componentes/Foot'
// import Mensajes from './Componentes/Mensajes'
import Perfil from './Componentes/Perfil'
import ConfiguracionesUsuario from './Componentes/ConfiguracionesUsuario'
import { UserProvider } from './Context/UserContext'
import { ModalProvider } from './Context/ModalContext'
import routess ,{ RouterBox } from './Config/routes'

function App() {
  const [redireccion, setRedireccion] = useState(false) //Seteo del Redirect

  const handleRedirect = () => {
    //Redirecciona cuando se conecta o registra
    setRedireccion(true)
    setTimeout(() => {
      setRedireccion(false)
    }, 1000)
  }

  return (
    <Router>
      {redireccion && <Redirect to='/' />}
      <Navbar />
      <Switch>
        <Route
          exact
          path='/Configuraciones'
          children={<ConfiguracionesUsuario />}
        />

        {routess.map( route => <RouterBox {...route} /> )}

        <Route
          exact
          path='/Usuario/:nombre'
          children={<Perfil handleRedirect={handleRedirect} />}
        />
      </Switch>
      <Foot />
    </Router>
  )
}

export default () =>
  <UserProvider>
    <ModalProvider><App /></ModalProvider>
  </UserProvider>

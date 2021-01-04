import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route,
  Redirect } from 'react-router-dom'
import Navbar from './Componentes/Navbar/index'
import Foot from './Componentes/Foot/index'
// import Mensajes from './Componentes/Mensajes'
import Registrarse from './Componentes/Registrarse'
import Perfil from './Componentes/Perfil'
import ConfiguracionesUsuario from './Componentes/ConfiguracionesUsuario'
import { UserProvider } from './Context/UserContext'
import { ModalProvider } from './Context/ModalContext'
import Home from './Pages/Home'
import routess ,{ RouterBox } from './Config/routes'

// Seguir en singUp 


const f = (endPoint) => { 
  const url = 'https://jsonplaceholder.typicode.com/' + endPoint
  const method ='POST' 
  const body = data => JSON.stringify(data)

  return({
    put: data => fetch(url, { 
      method, body:body(data), 
    }).then(r => r.json()),

    get: () => fetch(url).then(r => r.json())
  })
}
const direccion = f('posts/2')
direccion.get().then(console.table)

function App() {
  const [redireccion, setRedireccion] = useState(false) //Seteo del Redirect
  const [sesion, setSesion] = useState() //Setea al usuario 
  const [conjuntoDeDibujos, setconjuntoDeDibujos] = useState()
  
  async function peticion() {
    const datos = await fetch('http://localhost:8888/react/Index')
      .then(r => r.json())
    setconjuntoDeDibujos(datos)
  }

  useEffect(() => {
    if (!conjuntoDeDibujos) {
      peticion()
    }
  }, [conjuntoDeDibujos])

  const handleCambio = (event, set) => set(event.target.value) //Para Actualizar los formularios

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

    {/*<Route
            exact
            path='/Mensajes'
            children={
              <Mensajes sesion={sesion} handleRedirect={handleRedirect} />
            }
          />*/}

          <Route
            exact
            path='/'
            children={
                <Home conjuntoDeDibujos={conjuntoDeDibujos} />
            }
          />

          <Route
            exact
            path='/Registrarse'
            children={
              <Registrarse
                handleRedirect={handleRedirect}
                setSesion={setSesion}
                sesion={sesion}
              />
            }
          />

          {
            routess.map( route => 
              <RouterBox key={route.path} {...route} />
            )
          }

          <Route
            exact
            path='/Usuario/:nombre'
            children={<Perfil handleRedirect={handleRedirect} />}
          />

        </Switch>

        <hr />
        <Foot />
      </Router>
  )
}


export default () =>
  <UserProvider> 
    <ModalProvider><App /></ModalProvider>
  </UserProvider> 

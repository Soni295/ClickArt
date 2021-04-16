import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route } from 'react-router-dom'
import Navbar from './Componentes/Navbar/index'
import Foot from './Componentes/Foot/index'
// import Mensajes from './Componentes/Mensajes'
import Registrarse from './Componentes/Registrarse'
import { UserProvider } from './Context/UserContext'
import { ModalProvider } from './Context/ModalContext'
import routess , { RouterBox } from './Config/routes'
import { MainGalleryProvider } from './Context/MainGalleryContext'

function App() {
  const [sesion, setSesion] = useState() //Setea al usuario
  const handleRedirect = () => console.log('redirect')

  return (
      <Router>
        <Navbar />
        <Switch>
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
          {routess.map( route =>
            <RouterBox
              key={route.path}
              {...route}
            />
          )}
        </Switch>
        <hr />
        <Foot />
      </Router>
  )
}
export default () => (
  <UserProvider>
    <MainGalleryProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </MainGalleryProvider>
  </UserProvider>
)

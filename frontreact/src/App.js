import React from 'react'
import {
  BrowserRouter as Router,
  Switch } from 'react-router-dom'
import Navbar from './Componentes/Navbar/index'
import Foot from './Componentes/Foot/index'
import { UserProvider } from './Context/UserContext'
import { ModalProvider } from './Context/ModalContext'
import { MainGalleryProvider } from './Context/MainGalleryContext'
import { allRoutes } from './Config/routes'
import { RouteBox } from './Config/Route'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      {allRoutes.map((route) =>
        <RouteBox key={route.path} {...route} />
      )}
    </Switch>
    <hr />
    <Foot />
  </Router>
)


export default () => (
  <MainGalleryProvider>
    <UserProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </UserProvider>
  </MainGalleryProvider>
)

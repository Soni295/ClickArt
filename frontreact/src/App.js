import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { allRoutes } from './Config/routes'
import { RouteBox } from './Config/Route'

import { MainGalleryProvider } from './Context/MainGalleryContext'
import { ModalProvider } from './Context/ModalContext'
import { UserProvider } from './Context/UserContext'

import Navbar from './Components/Navbar/index'
import Foot from './Components/Foot/index'

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
      <ModalProvider> <App /> </ModalProvider>
    </UserProvider>
  </MainGalleryProvider>
)

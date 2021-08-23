import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import allRoutes from './Config/routes'
import { RouteBox } from './Config/Route'
//import { MainGalleryProvider } from './Context/MainGalleryContext'
import { UserProvider } from './Context/UserContext'

import Navbar from './Components/Navbar'
import Foot from './Componentes/Foot'
import './index.css'

export const App = () => (
  <UserProvider>
    <Router>
      <Navbar />
        <Switch>
          {allRoutes.map( route =>
            <RouteBox {...route} />
          )}
        </Switch>
      <Foot />
    </Router>
  </UserProvider>
)

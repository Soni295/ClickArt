import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import allRoutes from './Config/routes'
import { RouteBox } from './Config/Route'
import { Layout } from './Components/Layout'
import './index.css'

export const App = () => (
  <Router>
    <Layout>
      <Switch>
        {allRoutes.map( route =>
          <RouteBox {...route} />
        )}
      </Switch>
    </Layout>
  </Router>
)

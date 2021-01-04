import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Foot from "./Componentes/Foot";
import routes from './Config/routes'

// App
export default () => {
  return(
    <Router>
    <Navbar />
    <Switch>
      {routes
        .map(route =>
          (<Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />)
        )
      }
    </Switch>
    <Foot />
    </Router>
  )
}

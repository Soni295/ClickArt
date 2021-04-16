import React from 'react'
import { Route } from 'react-router-dom'

export const RouteBox = (route) => (
  <Route
    path={route.path}
    key={route.path}
    render = { props => <route.Component {...props} />}
  />
)

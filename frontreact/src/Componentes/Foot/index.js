import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../Config/routes'

//const routesFoot = routes.filter( route => route.text)

// Foot
export default () => (
  <>
    <hr />
    <p className='pie'>
      ©2020{' '}
    </p>
  </>
)

/*
      {routesFoot.map((route, i) =>
        <Link key={i} to={route.path}>
          |{route.text}
        </Link>
      )}

*/

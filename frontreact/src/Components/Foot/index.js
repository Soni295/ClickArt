import React from 'react'
import { Link } from 'react-router-dom'
import { footerRoutes } from '../../Config/routes'
import './style.css'

// Replace all _ for ' ' and / for ' '
// Example '/Terminos_Y_Condiciones' return 'Terminos Y Condiciones '
const foot = footerRoutes.map(route =>
  ({path: route.path, text: route.path.replace(/[_|/]/g, ' ')})
)

// Foot
export default () => (
  <>
      <hr id='hr-foot' />
    <p className='foot'>
      ©2020{' '}
      {foot.map((route, i) =>
        <Link key={i} to={route.path}>
          |{route.text + ' '}
        </Link>
      )}
    </p>
  </>
)

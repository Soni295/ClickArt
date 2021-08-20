import React from 'react'
//import { linkToText } from '../../../Config/Path'

import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default ({name}) => (
  <Link to={name} >
    <Navbar.Text>
    </Navbar.Text>
  </Link>
)

//      {linkToText(name)}

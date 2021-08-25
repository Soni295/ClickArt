import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export default ({name, link}) => (
  <Link to={link}>
    <Navbar.Text>
      {name}
    </Navbar.Text>
  </Link>
)

import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export default ({children, link}) => (
  <Link to={link}>
    <Navbar.Text>
      {children}
    </Navbar.Text>
  </Link>
)

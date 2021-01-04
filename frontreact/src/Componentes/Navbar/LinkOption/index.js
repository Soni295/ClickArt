import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default ({name}) => 
  <Link to={name.replace(' ', '')}>
    <Navbar.Text>{name}</Navbar.Text>
  </Link>

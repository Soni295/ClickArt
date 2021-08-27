import React from 'react'
import { Navbar } from 'react-bootstrap'
import Brand from './Components/Brand'

export const NavBarLayout = ({children}) => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Brand />
    <Navbar.Toggle />
    <Navbar.Collapse id='basic-navbar-nav'>
      {children}
    </Navbar.Collapse>
  </Navbar>
)

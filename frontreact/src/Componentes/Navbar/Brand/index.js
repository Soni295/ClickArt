import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

// Brand
export default () => (
  <Link to='/'>
    <Navbar.Brand>
      <img
        src='/images/hi.png'
        width='30'
        height='30'
        className='d-inline-block align-top'
        alt='React Bootstrap logo'
      />
    </Navbar.Brand>
  </Link>
)

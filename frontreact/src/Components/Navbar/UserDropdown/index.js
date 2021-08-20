import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Path } from '../../../Config/Path'


const LogOut = () => {
}

const LinkOption = ({text, link}) =>
  <Link to={link}>
    <span className='dropdown-item'>{text}</span>
  </Link>


// UserDropdown
export default ({user}) => {
  return (
    <NavDropdown
      className='desplegable'
      title={user}
      id='collasible-nav-dropdown'
    >
      <LinkOption link={'/User/' + user} text='My Account'/>
      <LinkOption link={Path.Settings} text='Settings'/>
      <NavDropdown.Divider />
      <span
        className='dropdown-item'
        onClick={ () => LogOut()}
      >
        Log Out
      </span>
    </NavDropdown>
  )
}

import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LogOut = () => {
  const url = 'http://localhost:8888/react/CerrarSesion'
  const parameters = {
    method: 'DELETE',
    credentials: 'include'
  }
  /*
  const data = fetch(url, parameters)
    .then(r => r.json())
  */
  const data = {msg:'Success Log Out'}
  if(data.msg === 'Success Log Out') {
    alert('Se ha cerrado su sesion')
  }
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
      <LinkOption link={'/Settings'} text='Settings'/>
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

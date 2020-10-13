import React, { useContext } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Conectarse from './LogInModal/index'
import ModalContext from '../../Context/ModalContext'
import UserContext from '../../Context/UserContext'
import Search from './Search/index'
import LinkOption from './LinkOption/index'
import Brand from './Brand/index'
import UserDropdown from './UserDropdown/index'
// Navbar
export default () => {
  const { handleShowModal } = useContext(ModalContext)
  const { session } = useContext(UserContext)
  
  const LogInModal = () => (
    <>
      <Nav.Link onClick={handleShowModal}>Conectarse</Nav.Link>
      <Conectarse />
    </>
  )

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Brand />
      <Navbar.Toggle />
      <Navbar.Collapse id='basic-navbar-nav'>
        {session.logIn && <LinkOption name='Upload' />}
        <Search />

        <Nav>
          {!session.logIn 
            ? <><LinkOption name='Sign Up'/><LogInModal /></> 
            : <><LinkOption name='Message' />
              <UserDropdown user={session.user}/>
            </>
          }
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

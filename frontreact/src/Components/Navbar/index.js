import React, { useContext } from 'react'
import { Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { UserContext } from '../../Context/UserContext'
import { Path } from '../../Config/Path'
import Brand from './Components/Brand'
import Conectarse from './LogInModal/index'
import Search from './Components/Search'
import LinkOption from './Components/NavBarLink'
import UserDropdown from './UserDropdown/index'

import { useModal } from '../../hooks/useModal'

// Navbar
export default () => {
  const { session } = useContext(UserContext)
  const [modalState, showModal, hideModal, changeModal] = useModal()
      //<Nav.Link onClick={setModal.enable}>Conectarse</Nav.Link>

  const LogInModal = () => (
    <>
      <Nav.Link onClick={() => changeModal()}>Conectarse</Nav.Link>
      <Conectarse />
    </>
  )

  return (
    <NavbarBS bg='dark' variant='dark' expand='lg'>
      <Brand />
      <NavbarBS.Toggle />
      <NavbarBS.Collapse id='basic-navbar-nav'>
        <Search />
        {session.logIn && <LinkOption name={Path.Upload} />}
        <Nav>
          {session.logIn
            ? <UserDropdown user={session.user}/>
            : <><LinkOption name={Path.SignIn}/><LogInModal/></>
          }
        </Nav>
      </NavbarBS.Collapse>
    </NavbarBS>
  )
}

import React, { /* useContext */} from 'react'
import { Nav, Navbar as NavbarBS } from 'react-bootstrap'

import { ModalContext } from '../../Context/ModalContext'
import { UserContext } from '../../Context/UserContext'

import { Path } from '../../Config/Path'

import Brand from './Components/Brand'
import Conectarse from './LogInModal/index'
import Search from './Components/Search'
import LinkOption from './Components/NavBarLink'
import UserDropdown from './UserDropdown/index'

// Navbar
export default () => {
  //const { setModal } = useContext(ModalContext)
      //<Nav.Link onClick={setModal.enable}>Conectarse</Nav.Link>
  //const { session } = useContext(UserContext)

  const LogInModal = () => (
    <>
      <Nav.Link onClick={() => console.log('hola')}>Conectarse</Nav.Link>
      <Conectarse />
    </>
  )

  return (
    <NavbarBS bg='dark' variant='dark' expand='lg'>
      <Brand />
      <NavbarBS.Toggle />
      <NavbarBS.Collapse id='basic-navbar-nav'>

      </NavbarBS.Collapse>
    </NavbarBS>
  )
}

/*

        {session.logIn && <LinkOption name={Path.Upload} />}
        <Search />

        <Nav>
          {!session.logIn
            ? <><LinkOption name={Path.SignIn}/><LogInModal /></>
            : <UserDropdown user={session.user}/>
          }
        </Nav>

*/

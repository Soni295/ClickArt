import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap'

import { LogInModal }from './../LogInModal'
import UserDropdown from './UserDropdown'

import { NavBarLayout }from './NavBarLayout'
import Search from './Components/Search'
import NavBarLink from './Components/NavBarLink'

import { useModal } from '../../hooks/useModal'
import { UserContext } from '../../Context/UserContext'
import { Path } from '../../Config/Path'

export default () => {
  const { session } = useContext(UserContext)
  const [modalState, showModal, hideModal] = useModal()

  return (
    <NavBarLayout>
      <Search />
      {session.logIn &&
        <NavBarLink link={Path.Upload}>
          Upload
        </NavBarLink>
      }
      <Nav>
        {session.logIn
          ? <UserDropdown user={session.user}/>
          : <>
              <NavBarLink link={Path.SignUp}>
                Sign Up
              </NavBarLink>

              <LogInModal
                modalState={modalState}
                hideModal={hideModal}
                showModal={showModal}
              />
            </>
        }
      </Nav>
    </NavBarLayout>
  )
}

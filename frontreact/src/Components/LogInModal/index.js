import React from 'react'
import { Nav, Modal as ModalBS } from 'react-bootstrap'

/*
import { Inputs } from '../Form/Inputs'

const inputs = [
  new Inputs('user', 'User name'),
  new Inputs('password', 'put your password here', 'password'),
]
*/


const Modal = ({modalState, hideModal}) => {
  return (
    <ModalBS
      dialogClassName='modal-Sesion'
      show={modalState}
      onHide={hideModal}
    >
      <ModalBS.Header closeButton>
        <ModalBS.Title>Log In</ModalBS.Title>
      </ModalBS.Header>

      <ModalBS.Body>
      </ModalBS.Body>
    </ModalBS>
  )
}

export const LogInModal = ({modalState, hideModal, showModal}) => {
  return (
    <>
      <Nav.Link onClick={showModal}>Conectarse</Nav.Link>
      <Modal
        modalState={modalState}
        hideModal={hideModal}
      />
    </>
  )
}

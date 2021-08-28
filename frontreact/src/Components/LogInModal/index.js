import React from 'react'
import { Nav, Modal as ModalBS, Button } from 'react-bootstrap'
import { Form } from '../Form'
import { useInput } from '../../hooks/useInput'
/*
import { Inputs } from '../Form/Inputs'

const inputs = [
  new Inputs('user', 'User name'),
  new Inputs('password', 'put your password here', 'password'),
]
*/

const Modal = ({modalState, hideModal}) => {

  const inputs = [
    useInput('user', 'User name'),
    useInput('password', 'put your password here', 'password'),
  ]

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
        <Form
          inputs={inputs}
        />
      </ModalBS.Body>

      <ModalBS.Footer>
        <Button
          variant="secondary"
          onClick={hideModal}
        >
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </ModalBS.Footer>
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

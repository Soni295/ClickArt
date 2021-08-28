import React from 'react'
import { Nav, Modal as ModalBS, Button } from 'react-bootstrap'

import { Form } from '../Form'

import { useInput } from '../../hooks/useInput'
import { useSubmit } from '../../hooks/useSubmit'
import { fetchLogIn } from '../../Services/MainGallery'

const Modal = ({modalState, hideModal}) => {

  const onSubmit = values => {
    console.log(values)
    fetchLogIn(values)
  }

  const inputs = [
    useInput('user', 'User name'),
    useInput('password', 'put your password here', 'password'),
  ]

  const handleSubmit= useSubmit({values: inputs, onSubmit })

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
          onSubmit={handleSubmit}
        >
          <Button variant="primary" type='submit'>
            Log in
          </Button>
        </Form>
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

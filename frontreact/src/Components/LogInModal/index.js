import React from 'react'
import { Nav, Button } from 'react-bootstrap'

import { Form } from '../Form'
import { Modal } from '../Modal'

import { useInput } from '../../hooks/useInput'
import { useSubmit } from '../../hooks/useSubmit'
import { fetchLogIn } from '../../Services/MainGallery'

export const LogInModal = ({modalState, hideModal, showModal}) => {

  const onSubmit = values => {
    fetchLogIn(values)
  }

  const inputs = [
    useInput('user', 'User name'),
    useInput('password', 'put your password here', 'password'),
  ]

  const handleSubmit= useSubmit({values: inputs, onSubmit })

  return (
    <>
      <Nav.Link onClick={showModal}>Conectarse</Nav.Link>
      <Modal
        modalState={modalState}
        hideModal={hideModal}
        title='Log In'
      >
        <Form
          inputs={inputs}
          onSubmit={handleSubmit}
        >
          <Button variant="primary" type='submit'>
            Log in
          </Button>
        </Form>
      </Modal>
    </>
  )
}

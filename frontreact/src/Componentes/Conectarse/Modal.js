import React from 'react'
import { Button, Modal } from 'react-bootstrap'

// Modal
export default ({showMoral, handleCloseMoral, FormGroup}) => (
  <Modal
    dialogClassName='modal-Sesion'
    show={showMoral}
    onHide={handleCloseMoral}
  >
    <Modal.Header closeButton>
      <Modal.Title>Log In</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <FormGroup />
    </Modal.Body>

    <Modal.Footer>
    <span className='mx-auto'>{/*mensaje*/}</span>
      <Button
        variant='outline-primary'
      >
        Sign In
      </Button>
      <Button variant='outline-light' onClick={handleCloseMoral}>
        Close 
      </Button>
    </Modal.Footer>
  </Modal>
)

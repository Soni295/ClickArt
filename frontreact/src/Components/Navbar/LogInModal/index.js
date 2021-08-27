import React from 'react'
import { Nav, Navbar as NavbarBS } from 'react-bootstrap'

import { Button, Modal as ModalBS } from 'react-bootstrap'
import { Inputs } from '../../Form/Inputs'
import { Form } from '../../Form/Form'


/* revisar
  const handleConectarse = async (value) => {
    const data = handleLogIn(value)
    if(data.msg === 'conexion exitosa') {
      props.setSesion(data.usuario)
      handleCloseModal()
      props.handleRedirect()
    } else {
      //setMensaje(data.msg)
    }
  }
*/



const inputs = [
  new Inputs('user', 'User name'),
  new Inputs('password', 'put your password here', 'password'),
]


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
      <Nav.Link onClick={() => showModal()}>Conectarse</Nav.Link>
      <Modal
        modalState={modalState}
        hideModal={hideModal}
      />
    </>
  )
}

/*
        <Form inputs={inputs} onSubmit={onSubmit}>

      <span className='mx-auto'>{}</span>
        <input type='button'
          variant='outline-primary'
          value='hoas'
        />
        <Button
          variant='outline-light'
          onClick={setModal.disable}
        >
          Close
        </Button>

      </Form>
    </Modal>
*/

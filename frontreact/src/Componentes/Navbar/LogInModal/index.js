import React,{ useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ModalContext from '../../../Context/ModalContext'
import Forms from './Forms/index'

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

// Modal
export default () => { 
  const { showModal, handleCloseModal } = useContext(ModalContext)
  return<>
    <Modal
      dialogClassName='modal-Sesion'
      show={showModal}
      onHide={handleCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Forms />
      </Modal.Body>

      <Modal.Footer>
      <span className='mx-auto'>{/*mensaje*/}</span>
        <Button
          variant='outline-primary'
        >
          Sign In
        </Button>
        <Button 
          variant='outline-light' 
          onClick={handleCloseModal}
        >
          Close 
        </Button>
      </Modal.Footer>
    </Modal>
  </>
}

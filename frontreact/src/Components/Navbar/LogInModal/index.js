import React,{ /* useContext */ } from 'react'

import { Button, Modal } from 'react-bootstrap'
import { Inputs} from '../../Form/Inputs'
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




// Modal
export default () => {
  //const { showModal, setModal } = useContext(ModalContext)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div>
    </div>
  )
}

/*
    <Modal
      dialogClassName='modal-Sesion'
      show={showModal}
      onHide={setModal.disable}
    >
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>

      <Modal.Body>
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
      </Modal.Body>

    </Modal>

*/

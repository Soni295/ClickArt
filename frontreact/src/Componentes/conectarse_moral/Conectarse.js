import React, {useState} from 'react';
import { Button, Modal, Nav } from 'react-bootstrap';
import './conectarse.css'


export default (props) =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <Nav.Link onClick={handleShow}>Conectarse</Nav.Link>
  
    <Modal dialogClassName="modal-Sesion" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Conectarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>Hola como esta todo por aca</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose}>
          Iniciar Sesión
        </Button>
        <Button variant="outline-light" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
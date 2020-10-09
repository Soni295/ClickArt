import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import FormGroup from './FormGroup'
import { handleLogIn } from './tempReq'

export default (props) => {
 
  const handleConectarse = async (value) => {
    const data = handleLogIn(value)
    if(data.msg === "conexion exitosa") {
      props.setSesion(data.usuario)
      props.handleCloseMoral()
      props.handleRedirect()
    } else {
      //setMensaje(data.msg)
    }
  }
  
  return (
    <>
      <Nav.Link onClick={props.handleShowMoral}>Conectarse</Nav.Link>

      <Modal
        dialogClassName="modal-Sesion"
        show={props.showMoral}
        onHide={props.handleCloseMoral}
      >
        <Modal.Header closeButton>
          <Modal.Title>Inicio de Sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormGroup />
        </Modal.Body>

        <Modal.Footer>
          <span className="mx-auto">{/*mensaje*/}</span>
          <Button
            variant="outline-primary"
          >
            Iniciar Sesión
          </Button>
          <Button variant="outline-light" onClick={props.handleCloseMoral}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

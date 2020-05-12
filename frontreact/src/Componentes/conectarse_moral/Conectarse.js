import React from 'react';
import { Button, Modal, Nav } from 'react-bootstrap';
import './conectarse.css'
import {InsertarFormulario, Formulario} from '../formulario/formulario'

export default (props) =>{
 
  const usuario = new InsertarFormulario('usuario','Usuario:','text','Jose2020' );
  const contrasena = new InsertarFormulario('contrasena','Contraseña:','password','********' );
  const formularios = [ usuario, contrasena ];

  return(
    <>
      <Nav.Link onClick={props.handleShowMoral}>Conectarse</Nav.Link>
    
      <Modal dialogClassName="modal-Sesion" show={props.showMoral} onHide={props.handleCloseMoral}>
        
        <Modal.Header closeButton>
          <Modal.Title>Inicio de Sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {formularios.map( (formulario, index) =>{
          return(
            <Formulario
              key={index}
              nombre={formulario.nombre}
              labelTexto={formulario.labelTexto}
              type={formulario.type}
              placeholder={formulario.placeholder}                
            />
          )
        })}
        </Modal.Body>

        <Modal.Footer>
          <Button 
            variant="outline-primary" 
            onClick={props.handleCloseMoral}
          >
            Iniciar Sesión
          </Button>
          <Button 
            variant="outline-light" 
            onClick={props.handleCloseMoral}
          >
            Cerrar
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}
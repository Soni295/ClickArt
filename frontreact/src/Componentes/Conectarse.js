import React,{ useState } from 'react';
import { Button, Modal, Nav } from 'react-bootstrap';
import {InsertarFormulario, Formulario} from './Reutilisable/formulario'

export default props => {
  
  const handleConectarse = async ( event ) => {
    
    event.preventDefault();
    const url='http://localhost:8888/react/Conectarse'
    
    let respuesta= await fetch(url,{
      method:'POST',
      credentials:'include',
      body: JSON.stringify({
        usuario:usuario,
        contrasena:contrasena
      }),
      headers:{'Content-Type' : 'application/json'}
    })

    let datos = await respuesta.json()
    
    if(datos.msg === 'conexion exitosa') {
      props.setSesion(datos.usuario)
      props.handleCloseMoral()
      props.handleRedirect()
    }    
    else{
      props.handleCloseMoral()
      alert(datos.msg)
    } 
    
  }

  const [ usuario , setUsuario ] = useState('')
  const [ contrasena , setContrasena ] = useState('')
  
  const usuarioMoral    = new InsertarFormulario('usuario', 'Usuario:', 'text', 'Jose2020', setUsuario, usuario );
  const contrasenaMoral = new InsertarFormulario('contrasena', 'Contraseña:', 'password', '********', setContrasena, contrasena );
  const formularios = [ usuarioMoral, contrasenaMoral ];
  
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
              key        = {index}
              nombre     = {formulario.nombre}
              labelTexto = {formulario.labelTexto}
              type       = {formulario.type}
              placeholder= {formulario.placeholder}
              onChange   = {( event ) => props.handleCambio(event, formulario.set)}
              value      = {formulario.variable}
            />
          )
        })}
        </Modal.Body>

        <Modal.Footer>
          <Button 
            variant="outline-primary" 
            onClick={handleConectarse}
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
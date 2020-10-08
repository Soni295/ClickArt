import React, { useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import { InsertarFormulario, Formulario } from "../Reutilisable/formulario";
import Forma from './Form'

export default (props) => {
  
  const handleConectarse = async (event) => {
    event.preventDefault();
    const url = "http://localhost:8888/react/Conectarse";
    const parametros={
      usuario:usuario,
      contrasena:contrasena
    }
    console.log(parametros)

    fetch(url,{
      method:"POST",
      credentials:"include",
      body:JSON.stringify(parametros),
      headers:{"Content-Type": "application/json"}
    })
    .then( respuesta => respuesta.json())
    .then(datos =>{
      if (datos.msg === "conexion exitosa") {
        props.setSesion(datos.usuario);
        props.handleCloseMoral();
        props.handleRedirect();
      } else {
        setMensaje(datos.msg);
      }
    })
  };

  

  const [mensaje, setMensaje] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const usuarioMoral = new InsertarFormulario(
    "usuario",
    "Usuario:",
    "text",
    "Jose2020",
    setUsuario,
    usuario
  );
  const contrasenaMoral = new InsertarFormulario(
    "contrasena",
    "Contraseña:",
    "password",
    "********",
    setContrasena,
    contrasena
  );
  const formularios = [usuarioMoral, contrasenaMoral];

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
         
  <Forma />
    
          {formularios.map((formulario, index) => {
            return (
              <Formulario
                key={index}
                nombre={formulario.nombre}
                labelTexto={formulario.labelTexto}
                type={formulario.type}
                placeholder={formulario.placeholder}
                onChange={(event) => props.handleCambio(event, formulario.set)}
                value={formulario.variable}
              />
            );
          })}
        </Modal.Body>

        <Modal.Footer>
          <span className="mx-auto">{mensaje}</span>
          <Button
            variant="outline-primary"
            onClick={(event) => handleConectarse(event)}
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

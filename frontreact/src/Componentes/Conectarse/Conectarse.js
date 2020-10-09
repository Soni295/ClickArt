import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import FormGroup from './FormGroup'
import { handleLogIn } from './tempReq'
import Modal from './Modal'
export default (props) => {
 
  const handleConectarse = async (value) => {
    const data = handleLogIn(value)
    if(data.msg === 'conexion exitosa') {
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
        dialogClassName='modal-Sesion'
        showMoral={props.showMoral}
        handleCloseMoral={props.handleCloseMoral}
        FormGroup={FormGroup}
      />

    </>
  )
}

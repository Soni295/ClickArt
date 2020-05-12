import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Perfil.css'


const DatosDePerfil = (props)=>{  
  
  const imagen       = "images/hi.png"
  const alt          = "no importa"
  const usuario      = "Armando Esteban Quito"
  const especialidad = "Ingeniero"
  const idiomas      = "Español"
  const pais         = "España"
  const email        = "Armandoquito@hotmail.com"

  return(
    <>
      <Container fluid>
        <Row className = "datos-perfil">
          <Col className = "text-center datos">
            <p id = "usuario-perfil">{usuario}</p>
            <p id = "especialidad-perfil">{especialidad}</p>
          </Col>
         
          <Col>
            <img className = "img-perfil" src = {imagen} alt = {alt} />
          </Col>
          <Col className = "text-center datos datos-secundarios">
            <p id = "idioma-perfil">Idiomas:{idiomas}</p>
            <p id = "pais-perfil">Pais: {pais}</p>
            <p id = "email-perfil">E-mail: {email}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const Galeria = ( props ) => {
  return(
  <p 
    style = {props.visible} 
    className = "ventana">galeria
  </p>)
}
const Contacto = (props) => {
  return(
  <p 
    style = {props.visible} 
    className = "ventana">Contactos
  </p>)
}



const Vistas = ( props ) => {
  
  const [ galeria, setGaleria ]   = useState({display: "block"})
  const [ contacto, setContacto ] = useState({display: "none"})
  
  const handleMostrarGaleria = () => {
    setGaleria({ display : "block" })
    setContacto({ display : "none" })
  }
  const handleMostrarContacto = () => {
    setContacto({ display : "block" })
    setGaleria({ display : "none" })
  }

  return(
    <>
      <hr/>
      <div>
        <ul className="vistas">
          <li>
            <button 
              className = "seleccion" 
              onClick = {handleMostrarGaleria}              
            >
              Galeria
            </button>
          </li>
          <li>
            <button 
              className = "seleccion" 
              onClick = {handleMostrarContacto}              
            >
              Contacto
            </button>
          </li>      
        </ul>
      </div>      
      <div>
        <Galeria visible = {galeria} />
        <Contacto visible = {contacto} />        
      </div>
    </>
  )
}











export default ( props ) => {
  return(
    <>
      <DatosDePerfil />
      <Vistas />
    </>
  )

}

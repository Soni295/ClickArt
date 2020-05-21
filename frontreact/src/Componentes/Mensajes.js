import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


export default props => {
  
  if(!props.sesion) return <Redirect to="/" />

  return(

    <Container>
      <Row>        
        <Col className="caja-contactos"  sm={3}>
           <p className="contactos-titulo">Contactos</p>
           <hr />
           <p></p>           
        </Col>   
        <Col className="caja-mensajes" sm={8}>
          <p>Nombre de Receptor</p>
          <hr/>
          <p>Mensajedasdasdasdasda</p>
        </Col>
     
      </Row>
    </Container>
    
  )
}
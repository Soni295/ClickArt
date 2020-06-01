import React , { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const chats={
  0:[
    {
      id:'001',
      nombre:'Ejemplo12',
      mensaje:'Hola como estas?'
    },
    {
      id:'002',
      nombre:'Armando',
      mensaje:'Hola Bien aca tranka'
    },
    {
      id:'003',
      nombre:'Ejemplo12',
      mensaje:'Ah me alegro mucho de escuchar eso'
    }
  ],
  1:[
    {
      id:'004',
      nombre:'Ejemplo12',
      mensaje:'Hi'
    },
    {
      id:'005',
      nombre:'Ejemplo1',
      mensaje:'Who are you?'
    },
    {
      id:'006',
      nombre:'Ejemplo12',
      mensaje:'i am you'
    }
  ],
  2:
  [
    {
      id:'007',
      nombre:'Ejemplo12',
      mensaje:'Hi'
    },
    {
      id:'008',
      nombre:'Elena',
      mensaje:'Who are you?'
    },
    {
      id:'009',
      nombre:'Ejemplo12',
      mensaje:'i am you'
    }
  ]
}

const chat=
[ 
  {      
    nombre:'Ejemplo12',
    mensaje:'Hola como estas?'
  },
  
  {
    nombre:'Armando',
    mensaje:'Hola Bien aca tranka'
  },
  
  {
    nombre:'Ejemplo12',
    mensaje:'Ah me alegro mucho de escuchar eso'
  }
]

export default props => {

  const [ contactos, setContactos ]=useState(['Ruben','Armando','Esteban'])
  const [ mensajes, setMensajes ]=useState(chat)
  
  
  if(!props.sesion) return <Redirect to="/" />

  return(

    <Container>
      <Row>        
        <ListaDeContactos 
          contactos = {contactos}          
        />
        <Mensajes 
          mensajes={mensajes}
          sesion={props.sesion}
        />  
      </Row>
    </Container>  
  )
}
/*
   
*/

const Mensajes=( props ) => { 
    
  return(
    <>
      <Col className="chat" sm={8}>
        <div className="titulo-chat">
          <p>Nombre de Receptor</p>
        </div>
        <div className="caja-chat">        
        {
          props.mensajes.map((mensaje , index)=>{  
            if(mensaje.nombre === props.sesion[0]){
              return (
                <div className="mensaje emisor">
                  <p key={index}>
                    {mensaje.mensaje}
                  </p>
                </div>
              )
            }
            else {
              return(
                <div className="mensaje receptor">
                  <p key={index}>{mensaje.mensaje}</p>
                </div>
              )
            }
          })
        }
        </div>
        <div className="mensaje-caja">
          <textarea rows="1" cols="10" className="text-a-enviar">

          </textarea>
          <button className="enviador">Enviar</button>
        </div>
      </Col>
    </>
  )  
}


const ListaDeContactos=(props) =>{
  return(    
    <Col className="caja-contactos"  sm={3}>
      <div className="contactos-titulo">
        <p>Contactos</p>
      </div>     
      <div className="contactos">
        {
          props.contactos.map((usuario,index )=> {
            return (
              <p key={index}>{usuario}</p>
            )
          })
        }
      </div>   
    </Col>  
  )  
}
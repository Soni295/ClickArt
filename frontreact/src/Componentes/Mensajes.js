import React , { useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom'
import './mensajes.css'
import io from 'socket.io-client'

export default (props) => {
  if(!props.sesion) return <Redirect to="/" /> 
  
  const [ contacto, setcontacto ] = useState(''); 
  return(
    <div className="contenedor">
      <Contactos 
        sesion={props.sesion}
        setcontacto={setcontacto}        
      />
      <Chat
        contacto={contacto}
        sesion={props.sesion}
      />
    </div>
  )
}

const Contactos= (props)=>{
  const [ contactos, setcontactos ] = useState([ 'Armando', 'Ricardo' ]);   
  
  return(
    <div className="caja-contactos">
      <div className="titulo-contactos">
        <h3>Contactos</h3>
      </div>

      <div className="contactos">
        {
          contactos.map((contacto, index)=>(  
            <p 
              onClick={()=> props.setcontacto(contacto)} 
              key={index}
            >
              {contacto}
            </p>                       
          ))
        }
      </div>
    </div>
  )
}

let socket;

const Chat = ( props ) => {

  const[ mensajes, setMensajes ] = useState([])
  const[ correo, setCorreo] = useState('')
  const[flag, setFlag] = useState(true)
  const ENDPOINT='localhost:8888'
  
  useEffect(()=>{
    socket = io(ENDPOINT);

    socket.emit('chat',{usuario:props.sesion[0],contacto:props.contacto})
    socket.on('mensajes',(msj)=>{
      setMensajes(msj)      
    })
    socket.on('actualizarMensaje',(msj)=>{
      setMensajes().push(msj)     
    })

  },[props.contacto, props.sesion,flag]
  )  

  function enviarMensaje(){
    socket= io(ENDPOINT);   
    socket.emit('mensajeNuevo',{usuario:props.sesion[0],contacto:props.contacto,mensaje:correo})
    if(flag){
      setFlag(false)
    }else{
      setFlag(true)
    }
  }
  const handleCambio = ( event, set ) => set( event.target.value ); 

  return(
  <div className="chat">
    <div className="titulo-chat">
      <p>{props.contacto}</p>
    </div>
    <div className="caja-chat">
      {mensajes.map( ( mensaje, index ) => {
        if(mensaje.Usu_Nombre ===props.sesion[0]){
          return(
            <div className="mensaje-chat mensajes-usuario" key={'a'+ index}>
              <p key={index}>{mensaje.mensaje}</p>
            </div>
          )
        }
        return(

          <div className="mensaje-chat mensajes-contacto" key={'a'+ index}>
            <p key={index}>{mensaje.mensaje}</p>
          </div>
        )
        })        
      }
      <textarea
        onChange={ event => handleCambio( event, setCorreo)}
      />
      <button 
        onClick={()=> enviarMensaje()}
      >Enviar
      </button>

    </div>  
    <div className="mensaje-chat">      
    </div>  
  </div>
  )
}
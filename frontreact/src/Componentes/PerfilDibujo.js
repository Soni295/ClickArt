import React , { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Col ,Row ,Container } from 'react-bootstrap'

export default ( props ) => {

  const [ datosDibujo, setDatosDibujo ] = useState('')
  
  const { id } = useParams()

  useEffect( () => { 
    async function peticion() {   
      
      const url = 'http://localhost:8888/react/Dibujo'
      
      const formulario = {
        method:'POST',
        credentials:'include',
        body: JSON.stringify({id:id}),
        headers:{
          'Content-Type' : 'application/json'
        }
      }
      
      fetch(url,formulario)
      .then( respuesta => respuesta.json() )
      .then( datos => {
        if(datos.msg === "Este dibujo no existe"){          
          props.handleRedirect()
        }
        else{
          setDatosDibujo({
            usuario:datos.datos.Usu_Nombre,
            titulo:datos.datos.Titulo,
            archivo:'/images/'+datos.datos.Nombre_del_archivo,
            descripcion:datos.datos.Descripcion,
            icono:datos.datos.ID_Dibujo
          })          
        }
      })
    }
    peticion()   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  return (
    <Container fluid>      
      <Row>
        <Col className="dibubo-presentacion" sm={2}>
          <Link to={'/Usuario/'+datosDibujo.usuario}>
            <img className="dibujo-icono" src="/images/icon.png" alt={datosDibujo.usuario}/>
            <h2 className="text-center">{datosDibujo.usuario}</h2>
          </Link>
          <hr/>
          <h2 className="text-center">{datosDibujo.titulo}</h2>
          <p className="text-center" >{datosDibujo.descripcion}</p>
          <hr/>
        </Col>
        <Col sm={8}>
          <img className="dibujo-dibujo" src={datosDibujo.archivo} alt={datosDibujo.titulo}/>
        </Col>
        <Col className="dibubo-presentacion" sm={2}>          
        </Col>
      </Row>      
    </Container>
  )
}
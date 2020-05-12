import React from 'react';
import './dibujoGaleria.css'

export default ( props ) => {
  const direccion = '/Dibujo/' + props.direccion
  const nombre    ='/images/' + props.nombre
  const titulo    = props.titulo 

  return (
    <div className="caja-dibujo">
      <a href={direccion}>
        <img 
          className="dibujo-galeria" 
          src={nombre} 
          alt={titulo}/>
      </a>
    </div>
  )
}
import React from "react"
import { Link } from "react-router-dom"

export default ({direccion, nombre, titulo}) => {
  return (
    <div className="caja-dibujo">
      <Link to={'/Dibujo/' + direccion}>
        <img
          className="dibujo-galeria"
          src={'/images/' + nombre}
          alt={titulo}
        />
      </Link>
    </div>
  )
}

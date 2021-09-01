import React from "react"
import { Link } from "react-router-dom"

export default ({direccion, nombre, titulo}) => (
  <Link to={'/Dibujo/' + direccion}>
    <img
      className="draw"
      src={'/images/' + nombre}
      alt={titulo}
    />
  </Link>
)

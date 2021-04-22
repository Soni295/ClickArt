import React from "react"
import { Link } from "react-router-dom"

export const Draw = ({direccion, nombre, titulo}) => (
  <Link to={'/Dibujo/' + direccion}>
    <img
      className="dibujo-galeria"
      src={"/images/" + nombre}
      alt={titulo}
    />
  </Link>
)

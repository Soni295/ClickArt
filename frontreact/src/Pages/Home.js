import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";

export const Draw = ({direccion, nombre, titulo}) => {
  return (
    <div className="caja-dibujo">
      <Link to={'/Dibujo/' + direccion}>
        <img
          className="dibujo-galeria"
          src={"/images/" + nombre}
          alt={titulo}
        />
      </Link>
    </div>
  );
}

export const Gallery = () => {

  const [conjuntoDeDibujos, setconjuntoDeDibujos] = useState(null)

  const URL = 'http://localhost:8888'
  useEffect(() => {
    fetch(URL + '/react/Index')
      .then(r => r.json())
      .then(data => setconjuntoDeDibujos(data))
    } , [])

  return (
    <div className="galeria">
      {conjuntoDeDibujos &&
        conjuntoDeDibujos.map((dibujo) =>
          <Draw
            direccion={dibujo.ID_Dibujo}
            nombre={dibujo.Nombre_del_archivo}
            titulo={dibujo.titulo}
            key={dibujo.ID_Dibujo}
          />
        )}
    </div>
  )
}


const Welcome = ({sesion}) => {

  return sesion ?
    <div className="cartel">
      <h1>Bienvenido/a {sesion[0]}</h1>
    </div>
      :
    <div style={{ height: "100px" }}></div>
}

export default ({conjuntoDeDibujos}) => {
  return (
    <>
      <Welcome />
      <hr />
      <Gallery />
    </>
  )
}


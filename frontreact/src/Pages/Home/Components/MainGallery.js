import React, { useState, useEffect } from "react"
import { Draw }from "./Draw"

export const MainGallery = () => {
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

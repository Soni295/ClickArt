import React from "react"
import DibujoGaleria from "./Draw"

export default ({conjuntoDeDibujos}) => {
  return (
    <div className="galeria">
      {conjuntoDeDibujos &&
        conjuntoDeDibujos.map((dibujo) =>
            <DibujoGaleria
              direccion={dibujo.ID_Dibujo}
              nombre={dibujo.Nombre_del_archivo}
              titulo={dibujo.titulo}
              key={dibujo.ID_Dibujo}
            />
        )}
    </div>
  )
}

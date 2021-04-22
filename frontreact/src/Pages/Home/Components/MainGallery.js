import React, { useContext } from 'react'

import { MainGalleryContext } from '../../../Context/MainGalleryContext'
import { Draw } from './Draw'

export const MainGallery = () => {
  const { gallery } = useContext(MainGalleryContext)

  return (
    <main className="galeria">
      <hr />
      {gallery && gallery.map(({ID_Dibujo, Nombre_del_archivo, titulo}) =>
        <Draw
          direccion={ID_Dibujo}
          nombre={Nombre_del_archivo}
          titulo={titulo}
          key={ID_Dibujo}
        />
      )}
    </main>
  )
}

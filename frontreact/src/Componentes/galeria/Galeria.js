import React ,{ useState, useEffect } from 'react';
import DibujoGaleria from '../dibujo_galeria/DibujoGaleria'

export default ( props ) => {  

  const [ dibujos, setDibujos ] = useState([]);
  
  const url = props.url
  
  useEffect( () => {
    fetch(url)
      .then( respuesta => respuesta.json())
      .then( datos     => {
        console.log('ya llego')
        return setDibujos( datos )} )
      .catch( console.log('No se recibe galeria'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  return (
    <div className="galeria" >
      {
        dibujos.map( dibujo => { return(
          <DibujoGaleria 
            direccion = { dibujo.ID_Dibujo }
            nombre    = { dibujo.Nombre_del_archivo }
            titulo    = { dibujo.titulo }
            key       = { dibujo.ID_Dibujo }
          />
          );
        })
      }
    </div>
  )
}

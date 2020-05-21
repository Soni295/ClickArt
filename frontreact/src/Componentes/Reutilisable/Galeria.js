import React  from 'react';
import DibujoGaleria from './DibujoGaleria'

export default ( props ) => {  
  
  return (
    <div className="galeria" >
      {props.conjuntoDeDibujos &&
        props.conjuntoDeDibujos.map( dibujo => { 
          return(
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

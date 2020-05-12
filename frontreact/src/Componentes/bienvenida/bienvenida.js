import React from 'react';
import './bienvenida.css'

export default ( props ) => {
  return(    
    <div className="bienvenida">
  		<h1>Bienvenido/a {props.nombre}</h1>
  	</div>    
  );
}

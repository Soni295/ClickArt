import React from 'react'

export default ( props ) => {
  return(
    <>{  props.sesion ?
      <div className="cartel">
        <h1>Bienvenido/a {props.sesion[0]}</h1>
      </div>
      :
      <div style={{height:"100px"}}></div>
    }</> 
  );
}
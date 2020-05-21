import React from 'react'

export default (props) =>{
  return(
    <div 
      style = {props.visible} 
      className = "ventana"
    >
      {props.texto}
    </div>)
}
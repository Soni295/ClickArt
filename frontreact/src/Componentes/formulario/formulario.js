import React from 'react';
import { Form } from 'react-bootstrap'

/*
Insertarformulario pide:
nombre:(id de input, name del imput,for para el label(usa el mismo nombre))
labelTexto:(El texto del label)
type:(El tipo de input)
placeholder:(el placeholder que se desea poner)
*/

class InsertarFormulario{
  constructor(nombre,labelTexto,type,placeholder){
    this.nombre=nombre;
    this.labelTexto=labelTexto;
    this.type=type;
    this.placeholder=placeholder;
  }
}

function Formulario(props){
  return(
    <Form.Group>
      <Form.Label htmlFor={props.nombre}>
        {props.labelTexto}
      </Form.Label>
      <Form.Control 
        id={props.nombre} 
        name={props.nombre} 
        type={props.type} 
        placeholder={props.placeholder}  
        required />
    </Form.Group>
  )
}

export {InsertarFormulario, Formulario}
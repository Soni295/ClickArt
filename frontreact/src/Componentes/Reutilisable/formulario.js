import React from 'react';
import { Form } from 'react-bootstrap'

/*
Insertarformulario pide:
nombre:(id de input, name del imput,for para el label(usa el mismo nombre))
labelTexto:(El texto del label)
type:(El tipo de input)
placeholder:(el placeholder que se desea poner)
set: para setear el formulario
variable: donde se almacena este valor y se vuelve a mostrar en la caja
*/

class InsertarFormulario{
  constructor(nombre,labelTexto,type,placeholder,set,variable,span=''){
    this.nombre=nombre;
    this.labelTexto=labelTexto;
    this.type=type;
    this.placeholder=placeholder;
    this.set=set;
    this.variable=variable;
    this.span=span;
  }
}

function Formulario(props) {
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
        onChange={props.onChange}
        value = {props.value}
      />
      <Form.Text className="error">
      {props.span}
    </Form.Text>
    </Form.Group>
  )
}

export {
  InsertarFormulario, Formulario
}
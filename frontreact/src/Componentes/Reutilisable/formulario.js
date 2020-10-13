import React from "react";
import { Form } from "react-bootstrap";

class InputForm{
  constructor(name, placeHolder, type='text', span = ''){
    this.name = name
    this.placeHolder = placeHolder
    this.span = span
    this.type = type
  }
}

const userObj = new InputForm('User', 'Jose2020')
const nameObj = new InputForm('Name', 'Jose Perez')
const emailObj = new InputForm('Email', 'Jose20@gmail.com')
const passObj = new InputForm('Password', '********', 'password')
const pass2Obj = new InputForm('Confirm Password', '********', 'password')

const Inputs = [userObj, nameObj, emailObj, passObj, pass2Obj]

const Formulario = ({ input, handle, value }) => {
  const {name, placeHolder, type, span} = input
  return(  
    <Form.Group>
      <Form.Label htmlFor={name}>{name + ':'}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeHolder}
        onChange={e => handle(e)}
        value={value}
      />
      <Form.Text className="error">{span}</Form.Text>
    </Form.Group>
  )
}
export { Formulario, Inputs };

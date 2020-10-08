import React from "react"
import { Form } from "react-bootstrap";

// FormGenerator
export default ({index, data, value, handle}) => {
  const { label, name, type } = data
  return(
    <Form.Group key={index}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type ={type}
        onChange = { e => handle(e)}
        value={value}
      />
    </Form.Group>
  )
}

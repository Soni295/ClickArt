import React from 'react'
import { Form } from 'react-bootstrap'

// Form
export default ({index, data, value, handle}) => {
  const { label, name, type } = data
  return(
    <Form.Group key={index+ '1'}>
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

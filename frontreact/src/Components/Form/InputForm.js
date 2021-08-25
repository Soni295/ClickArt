import React from 'react'
import { Form } from 'react-bootstrap'

export const InputForm = ({name, ...rest}) => (
  <Form.Group>
    <Form.Label htmlFor={name}>
      {name + ':'}
    </Form.Label>
    <Form.Control
      name={name}
      {...rest}
    />
  </Form.Group>
)

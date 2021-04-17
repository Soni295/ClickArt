import React from 'react'
import { Form } from 'react-bootstrap'

export const TextInput = ({dispatch, ...rest}) => (
  <Form.Group>
    <Form.Control
      onChange={e => dispatch({name:e.target.name, value: e.target.value})}
      {...rest}
    />
  </Form.Group>
)

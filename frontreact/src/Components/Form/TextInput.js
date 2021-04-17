import React from 'react'
import { Form } from 'react-bootstrap'

export const TextInput = ({dispatch, ...rest}) => {

  const onChange = event => dispatch({
    name: event.target.name,
    value: event.target.value
  })

  return(
    <Form.Group>
      <Form.Control
        onChange={onChange}
        {...rest}
      />
    </Form.Group>
  )
}

import React from 'react'
import { Form } from 'react-bootstrap'

export const SwitchBox = ({label, error, ...rest}) => {
  return(
    <>
      <Form.Check
        type='switch'
        id='custom-switch'
        label={label}
        {...rest}
        required
      />
      <Form.Text className='error'>
        {error}
      </Form.Text>
    </>
  )
}

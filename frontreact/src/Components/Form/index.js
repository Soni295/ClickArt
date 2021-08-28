import React from 'react'
import { Form as FormBS } from 'react-bootstrap'
import { InputForm } from './InputForm'

export const Form = ({inputs, children, ...rest}) => (
  <FormBS {...rest}>

    {inputs.map(input =>
      <InputForm {...input} />
    )}
    {children}

  </FormBS>
)

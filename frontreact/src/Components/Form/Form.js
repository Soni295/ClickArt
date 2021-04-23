import React from 'react'
import { Form as FormBS } from 'react-bootstrap'
import { TextInput } from './TextInput'

export const Form = ({inputs, children, onSubmit}) => (
  <FormBS onSubmit={onSubmit}>
    {inputs.map(input =>
      <TextInput key={input.name} {...input} />
    )}
    {children}
  </FormBS>
)

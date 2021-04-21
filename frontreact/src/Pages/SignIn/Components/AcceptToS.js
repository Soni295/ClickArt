import React from 'react'
import { Form as FormBS } from 'react-bootstrap'

export const AcceptToS = () =>(
  <FormBS.Check
    type='switch'
    id='custom-switch'
    label='Agree terms and conditions'
    required
  />
)


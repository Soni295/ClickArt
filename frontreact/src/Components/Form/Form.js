import React, { useReducer } from 'react'

import { Form as FormBS } from 'react-bootstrap'

import { TextInput } from './TextInput'

const reducer = (state, {name, value}) => ({ ...state , [name]: value})

export const Form = ({inputs, children, onSubmit}) => {
  const init = inputs.reduce((acc, cur) => ({...acc, [cur.name]: ''}) , {})
  const [state, dispatch] = useReducer(reducer, init)


  return(
    <FormBS onSubmit={onSubmit}>
      {inputs.map(input =>
        <TextInput
          key={input.name}
          {...input}
          value={state[input.name]}
          dispatch={dispatch}
        />
      )}
      {children}
    </FormBS>
  )
}

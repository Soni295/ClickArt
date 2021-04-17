import React, { useReducer } from 'react'
import { Form as FormBoostrap } from 'react-bootstrap'
import { TextInput } from './TextInput'

const reducer = (state, {name, value}) => ({ ...state , [name]: value})

export const Form = ({inputs, children}) => {
  const init = inputs.reduce((acc, cur) => ({...acc, [cur.name]: ''}) , {})
  const [state, dispatch] = useReducer(reducer, init)

  return(
    <FormBoostrap name='myForm'>
      {inputs.map(input =>
        <TextInput
          key={input.name}
          {...input}
          value={state[input.name]}
          dispatch={dispatch}
        />
      )}
      {children}
    </FormBoostrap>
  )
}

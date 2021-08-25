import React from 'react'
import { Form as FormBS } from 'react-bootstrap'

import { Form } from '../Form/Form'
import { SwitchBox } from '../Form/SwitchBox'

import { useSwitchBox } from '../../hooks/useSwitchBox'
import { useInput } from '../../hooks/useInput'

export const SignUpForm = () => {
  const [agreeTos, handleChange] = useSwitchBox()

  const inputs = [
    useInput('user', 'John_Doe23'),
    useInput('name', 'John Doe'),
    useInput('email', 'Johndoe@gmail.com', 'email'),
    useInput('password', '********', 'password'),
  ]

  const onSubmit = e => {
    e.preventDefault()
    const url = 'http://localhost:8888/react/Registrarse'

    const data = inputs.reduce((acc, {value, name}) =>
      ({...acc, [name]: value}) , {})
    console.log(data)
  }


  return(
    <Form
      className='formulario'
      inputs={inputs}
      onSubmit={onSubmit}
      name='myForm'
    >
      <SwitchBox
        label='Acepto los terminos y condiciones'
        value={agreeTos}
        onChange={handleChange}
      />
      <FormBS.Group className='text-center' >
        <button
          className='btn btn-primary boton-registrarme'
        >
          Registrarme
        </button>
      </FormBS.Group>
    </Form>
  )
}

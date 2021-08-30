import React from 'react'
import { Form as FormBS } from 'react-bootstrap'

import { Form } from '../Form'
import { SwitchBox } from '../Form/SwitchBox'

import { useSwitchBox } from '../../hooks/useSwitchBox'
import { useInput } from '../../hooks/useInput'
import { useSubmit } from '../../hooks/useSubmit'
import { fetchSignUp } from '../../Services/MainGallery'

export const SignUpForm = () => {
  const [agreeTos, handleChange] = useSwitchBox()

  const inputs = [
    useInput({
      name: 'user',
      placeholder: 'User Name'
    }),
    useInput({
      name: 'name',
      placeholder: 'Full name'
    }),
    useInput({
      name: 'email',
      placeholder: 'Johndoe@gmail.com',
      type: 'email'
    }),
    useInput({
      name: 'password',
      placeholder: '********',
      type: 'password'
    })
  ]

  const handleSubmit= useSubmit({values: inputs, onSubmit: fetchSignUp})

  return(
    <Form
      inputs={inputs}
      onSubmit={handleSubmit}
      name='myForm'
    >
      <SwitchBox
        label='Acepto los terminos y condiciones'
        value={agreeTos}
        onChange={handleChange}
      />
      <FormBS.Group className='text-center' >
        <button
          className='btn btn-primary'
        >
          Registrarme
        </button>
      </FormBS.Group>
    </Form>
  )
}

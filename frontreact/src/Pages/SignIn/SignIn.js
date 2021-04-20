import React, { useState } from 'react'
import { Container, Row, Col, Form as FormBS } from 'react-bootstrap'

import { Inputs } from '../../Components/Form/Inputs'
import { ToS } from './Components/ToS'
import { Title } from './Components/Title'
import { Form } from '../../Components/Form/Form'

import './style.css'

const inputs = [
  new Inputs('user', 'User name'),
  new Inputs('name', 'Your name'),
  new Inputs('email', 'Email', 'email'),
  new Inputs('password', 'put your password here', 'password'),
  new Inputs('password2', 'repeat your password here', 'password')
]

export const SignIn = () => {

  const SelectorD = () => {
    const [select, setSelect] = useState(0)
    return (
      <FormBS.Group>
        <FormBS.Label>Kind of user</FormBS.Label>
        <FormBS.Control
          id='tipo'
          as='select'
          custom
          onChange={e => setSelect(e.target.value)}
          value={select}
        >
          <option value='0'>N/N</option>
          <option value='1'>Artist</option>
          <option value='2'>Company</option>
        </FormBS.Control>
      </FormBS.Group>
    )
  }

  const AcceptToS = () => {
    return(
      <FormBS.Check
        type='switch'
        id='custom-switch'
        label='Acepto los terminos y condiciones'
        required
      />
    )
  }


  const DoYouHaveAccount = () => (
    <p>
      ¿Ya tienes cuenta?
      <button
        className='boton-link'
      >Haz click aqui
      </button>
    </p>
  )

  const SignInButton = () => {
    return(
      <FormBS.Group className='text-center' >
        <button
          className='btn btn-primary signin-btn'
          id='signin-btn'
        >
          Sign In
        </button>
      </FormBS.Group>
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return(
    <>
      <Title />
      <Container>
        <Row className='justify-content-center'>
          <Col className='SignInForm'>
            <Form
              inputs={inputs}
              onSubmit={onSubmit}
            >
              <SelectorD />
              <AcceptToS/>
              <DoYouHaveAccount />
              <SignInButton />
            </Form>
          </Col>
          <ToS />
        </Row>
      </Container>
    </>
  )
}

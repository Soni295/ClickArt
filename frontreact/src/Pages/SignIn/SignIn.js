import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Inputs } from '../../Components/Form/Inputs'
import { Form } from '../../Components/Form/Form'
import { AcceptToS } from './Components/AcceptToS'
import { DoYouHaveAccount } from './Components/DoYouHaveAccount'
import { SignInButton } from './Components/SignInButton'
import { ToS } from './Components/ToS'
import { Title } from './Components/Title'
import { PATHSERVER } from '../../Config/PATHSERVER'

import './style.css'

const inputs = [
  new Inputs('user', 'User name'),
  new Inputs('name', 'Your name'),
  new Inputs('email', 'Email', 'email'),
  new Inputs('password', 'put your password here', 'password'),
  new Inputs('password2', 'repeat your password here', 'password')
]

export const SignIn = () => {

  const onSubmit = e => {
    e.preventDefault()
    const { user, name, email, password, password2 } = e.target

    const data = {
      user: user.value,
      name: name.value,
      email: email.value,
      password: password.value,
      password2: password2.value,
    }

    const post = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }
  fetch(PATHSERVER.SignUp , post).then(r => r.json())
  }

  return(
    <main className='sign-up-main'>
      <Container>
        <Row className='justify-content-center'>
          <Col className='sign-up mb-4'>
            <Title />
            <Form
              inputs={inputs}
              onSubmit={onSubmit}
            >
              <AcceptToS/>
              <DoYouHaveAccount />
              <SignInButton />
            </Form>
          </Col>
          <ToS />
        </Row>
      </Container>
    </main>
  )
}

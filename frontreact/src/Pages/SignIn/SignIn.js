import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Inputs } from '../../Components/Form/Inputs'
import { Form } from '../../Components/Form/Form'
import { AcceptToS } from './Components/AcceptToS'
import { DoYouHaveAccount } from './Components/DoYouHaveAccount'
import { SignInButton } from './Components/SignInButton'
import { ToS } from './Components/ToS'
import { Title } from './Components/Title'

import './style.css'

const inputs = [
  new Inputs('user', 'User name'),
  new Inputs('name', 'Your name'),
  new Inputs('email', 'Email', 'email'),
  new Inputs('password', 'put your password here', 'password'),
  new Inputs('password2', 'repeat your password here', 'password')
]

export const SignIn = () => {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return(
    <>
      <Title />
      <Container>
        <Row className='justify-content-center'>
          <Col className='sign-up'>
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
    </>
  )
}

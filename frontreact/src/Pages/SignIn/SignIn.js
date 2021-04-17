import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ToS } from './Components/ToS'
import { Title } from './Components/Title'
import { Form } from '../../Components/Form/Form'
import './style.css'

const inputs = [
  {
    name: 'user',
    placeholder: 'User name',
    type: 'text'
  },
  {
    name: 'name',
    placeholder: 'Your name',
    type: 'text'
  },
  {
    name: 'password',
    placeholder: 'put your password here',
    type: 'password'
  },
  {
    name: 'password2',
    placeholder: 'repeat your password here',
    type: 'password'
  }
]

export const SignIn = () => {
  return(
    <>
      <Title />
      <Container>
        <Row className='justify-content-center'>
          <Col className='SignInForm'>
            <Form inputs={inputs} />
          </Col>
          <ToS />
        </Row>
      </Container>
    </>
  )
}

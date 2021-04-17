import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ToS } from './Components/ToS'
import { Title } from './Components/Title'
import { Form } from '../../Components/Form/Form'

const inputs = [
  {
    name: 'user',
    label: 'User',
    placeholder: 'User name',
    type: 'text'
  },
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Your name',
    type: 'text'
  }
]

export const SignIn = () => {
  return(
    <>
      <Title />
      <Container>
        <Row className='justify-content-center'>
          <Col className='registro'>
            <Form inputs={inputs} />
          </Col>
          <ToS />
        </Row>
      </Container>
    </>
  )
}

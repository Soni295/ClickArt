import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Lorem } from '../Components/Lorem'
import { Title } from '../Components/Title'
import { SignUpForm } from '../Components/SignUpForm'

export default () => (
  <>
    <Title text='Registro de usuario' />
    <Container>
      <Row className='justify-content-center'>

        <Col className='main-box'>
          <SignUpForm />
        </Col>

        <Col className='main-box terminos'>
          <h2 className='text-center'>
            Terminos y condiciones
          </h2>
          <Lorem/>
          <Lorem/>
          <Lorem/>
        </Col>

      </Row>
    </Container>
  </>
)

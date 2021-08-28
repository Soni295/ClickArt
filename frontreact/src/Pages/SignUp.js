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

        <Col className='main-box'>
          <h2 className='text-center'>
            Terminos y condiciones
          </h2>
          {[1, 2, 3, 4, 5].map((n, index) =>
            <Lorem key={n + index}/>
          )}
        </Col>

      </Row>
    </Container>
  </>
)

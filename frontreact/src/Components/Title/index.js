import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Title = ({text}) => (
  <Container className='poster'>
    <Row className='title'>
      <h1 className='title'>{text}</h1>
    </Row>
  </Container>
)

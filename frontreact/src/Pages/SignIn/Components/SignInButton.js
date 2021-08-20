import React from 'react'
import {  Form as FormBS } from 'react-bootstrap'
export const SignInButton = () => (
  <FormBS.Group className='text-center'>
    <button
      className='btn btn-primary signin-btn'
      id='signin-btn'
    >
      Sign In
    </button>
  </FormBS.Group>
)

import React from "react"
import { Form } from "react-bootstrap";

// FormLogin
export default () => { 

  const UserForm = () =>(
    <Form.Group>
      <Form.Label>User:</Form.Label>
      <Form.Control
        type = 'text'
        onChange = {(e) => handleUser(e.target.value, 'user')}
        value = {formFilling.user}
      />
    </Form.Group>
  )

  const PasswordForm = () =>(
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type = 'password'
        onChange = {() => console.log('hola')}
        value = 'eeee'
      />
    </Form.Group>
  )
  return <><UserForm/><PasswordForm/></>
}

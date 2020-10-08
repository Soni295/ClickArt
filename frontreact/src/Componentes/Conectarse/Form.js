import React, { useReducer } from "react"
import FormGenerator from './FormGenerator'

const user = {
  label:'User:',
  name:'user',
  type:'text',
}

const password = {
  label:'Password:',
  name:'password',
  type:'password',
}

const reducer = (state, event) =>
  ({...state, [event.name]:event.value})

export default () => { 
  const [formData, setFormData] = useReducer(reducer, {})
  
  const handleChange = event =>
    setFormData({name:event.target.name, value:event.target.value})

  const FormGroup =
    [user, password].map(
      (form, index) =>
        <FormGenerator 
          index={index}
          data={form}
          value={formData[form.name]} 
          handle={handleChange}
        />
      )
  return FormGroup
}

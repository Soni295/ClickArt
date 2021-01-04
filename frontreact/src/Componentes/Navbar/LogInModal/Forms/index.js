import React, { useReducer } from "react"
import FormTemplater from './FormTemplate'

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
// FormGroup
export default () => { 
  const [formData, setFormData] = useReducer(reducer, {})
  
  const handleChange = event => {
    const {name, value} = event.target
    setFormData({[name]:value})
  }

  const FormGroup =
    [user, password].map(
      (form, index) =>
        <FormTemplater 
          index={index}
          data={form}
          value={formData[form.name]} 
          handle={handleChange}
        />
      )
  return FormGroup
}

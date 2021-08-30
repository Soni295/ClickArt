import { useState } from 'react'

export const useInput =
  ({name='', placeholder='', type='text', required=true}) => {
  const [value, setValue] = useState('')
  const key = name + type
  const onChange = e => setValue(e.target.value)
  return {value, onChange, name, placeholder, type, key, required}
}

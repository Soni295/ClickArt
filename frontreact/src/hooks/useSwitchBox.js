import { useState } from 'react'

export const useSwitchBox = () => {
  const [state, setState] = useState(false)
  const handleChange = () => setState(!state)
  return [state, handleChange]
}

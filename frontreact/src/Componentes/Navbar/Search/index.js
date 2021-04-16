import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { usePost } from '../../../hooks/useRequests'
// Search
export default () => {
  const [search, setSearch] = useState('')
  const handleChange = e => setSearch(e.target.value)


  const handleSubmit = usePost('/react/Buscador')

  const handleclickBuscador = event => {
    event.preventDefault()

    const parametros ={
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ search }),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8888/react/Buscador'

    search !== '' && search !== ' ' ?
      fetch(url, parametros )
        .then(r => r.json())
        .then(datos => {
          if(datos.msg === 'No se ha encontrado nada') {
            alert('No se ha encontrado nada')
          } else {
            //props.setconjuntoDeDibujos(datos)
          }
        })
      : console.log('')
  }

  return(
    <Form onSubmit={e => handleSubmit(e, search)}
      className='m-auto'
    inline>
      <FormControl
        className='mr-sm-2'
        type='text'
        value={search}
        placeholder='What do you want to see?'
        onChange={handleChange}
      />
      <input
        type='submit'
        className='btn btn-outline-info'
        value='Search'
      />
    </Form>
  )
}

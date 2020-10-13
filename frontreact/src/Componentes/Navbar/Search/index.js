import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'

// Search
export default () => {
  const [search, setSearch] = useState('')
  
  const handleChange = e => 
    setSearch(e.target.value)
  
  const getSearch = (e, search) => {
    e.preventDefault()
    alert(search)
  }

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
    <Form onSubmit={ e => getSearch(e, search)} 
      className='m-auto' 
    inline>
      <FormControl 
        className='mr-sm-2'
        type='text'
        value={search}
        placeholder='What do you want to see?'
        onChange={e => handleChange(e)}
      />
      <input 
        type='submit' 
        className='btn btn-outline-info' 
        value='Search'
      />
    </Form>
  )
}

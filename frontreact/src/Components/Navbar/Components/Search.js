import React, { /*useContext*/ useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
//import { MainGalleryContext } from '../../../Context/MainGalleryContext'
// Search
export default () => {
 // const { onSubmit } = useContext(MainGalleryContext)
    //<Form onSubmit={e => onSubmit(e, search)}
  const [search, setSearch] = useState('')

  return(
    <Form onSubmit={e => console.log(e)}
      className='m-auto'
    inline>
      <FormControl
        className='mr-sm-2'
        type='text'
        value={search}
        placeholder='What do you want to see?'
        onChange={e => setSearch(e.target.value)}
      />
      <input
        type='submit'
        className='btn btn-outline-info'
        value='Search'
      />
    </Form>
  )
}

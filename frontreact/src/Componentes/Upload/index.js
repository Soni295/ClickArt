import React, { useState, /* useContext */ } from 'react'
import { Form, Container, Col } from 'react-bootstrap'
import axios from 'axios'
//import { UserContext } from '../../Context/UserContext'

// Upload
export default () => {
  //const { session } = useContext(UserContext)
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [tags, setTags] = useState('')
  const [dibujo, setDibujo] = useState('')
  const handleCambio = (e, set) => set(e.target.value)
  const handleDibujoCambio = (event, set) => set(event.target.files[0]) //Para actualizar los dibujos


  const handleEnviar = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('Titulo', titulo)
    formData.append('Descripcion', descripcion)
    formData.append('Tags', tags)
    formData.append('Dibujo', dibujo)
   // formData.append('Usuario', session.user)

    try {
      const res = await axios.post(
        'http://localhost:8888/react/SubirDibujo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(res)
      alert('Fue subido exitosamente')
    } catch (err) {
      console.log(err)
      alert('Llene todos los datos')
    }
  }
  // if (!session.logIn) return <Redirect to='/' />

  return (
    <Container className='subida-box'>
      <Form className='text-center row' encType='multipart/form-data'>
        <Col>
          <Form.Group>
            <div className='previa'>
              <p>Previsualisacion</p>
            </div>
            <label
              className='btn btn-outline-secondary my-2 my-btn'
              htmlFor='dibujo'
            >
              Seleccione su Dibujo
            </label>
            <input
              id='dibujo'
              type='file'
              onChange={ e => handleDibujoCambio(e, setDibujo)}
              required
              accept='image/*'
            ></input>
          </Form.Group>
        </Col>
        <Col className='form-de-subida'>
          <input
            type='text'
            id='titulo-subida'
            onChange={ e => handleCambio(e, setTitulo)}
            value={titulo}
            required
            placeholder='Titulo'
          ></input>
          <textarea
            id='descripcion'
            rows='6'
            onChange={ e => handleCambio(e, setDescripcion)}
            value={descripcion}
            required
            placeholder='Descripcion'
          ></textarea>
          <textarea
            id='tags'
            onChange={ e => handleCambio(e, setTags)}
            value={tags}
            placeholder='Tags deben ser con espacios y guion si van juntos, por ejemplo: renecentismo arte blanco-y-negro patata'
          ></textarea>
          <button
            onClick={handleEnviar}
            className='btn btn-primary boton-subir'
          >
            Subir
          </button>
        </Col>
      </Form>
    </Container>
  )
}

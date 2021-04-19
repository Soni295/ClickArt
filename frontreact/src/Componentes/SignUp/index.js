import React/*, { useState, useReducer, useContext }*/from 'react'
import Tos from './Tos/index'


//import { Inputs , Formulario } from './Reutilisable/formulario'
// import { verificar } from './Reutilisable/Verificador'
//import { Redirect } from 'react-router-dom'
// import ModalContext from '../Context/ModalContext'

/*
  const handleCrearCuenta = event => {
    event.preventDefault()
    const url='http://localhost:8888/react/Registrarse'
    setMensaje({})
    const parametros = {
      usuario    :usuario,
      nombre     :nombre,
      email      :email,
      contrasena :contrasena,
      contrasena2:contrasena2,
      tipo       :select,
      termycondi :termycondi
    }
    setMensaje(verificar(parametros))

    if(
      mensaje.usuario    === '' &&
      mensaje.nombre     === '' &&
      mensaje.email      === '' &&
      mensaje.contrasena === '' &&
      mensaje.term       === ''
    ){
      fetch(url,{
        method:'POST',
        credentials:'include',
        body: JSON.stringify(parametros),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
        .then( respuesta => respuesta.json() )
        .then( datos => {
          if(datos){
            alert(datos.msg)
            props.setSesion(datos.usuario)
            props.handleRedirect()
          }
        }
      )
    }
  }
*/
/*
const reducer = (state, event) => {
  console.log({...state, [event.name]:event.value})
  return({...state, [event.name]:event.value})
}*/

export default props => {
  /*
  const { handleShowModal } = useContext(ModalContext)
  const [formaaa, setFormaaa] = useReducer(reducer, {})
  const [ mensaje, setMensaje ]         = useState({})
  const [ select, setSelect ]           = useState('0')
  const [ termycondi, setTermycondi ]   = useState('')
  const handleChange = event => {
    const {name, value} = event.target
    console.log(formaaa)
    setFormaaa({[name]:value})

  }
  const handleCambio = (event, set) => set(event.target.value) //Para Actualizar los formularios

  if(props.sesion) return <Redirect to='/' />
*/
  return(
    <>
    {/*   <Container>
        <h1 className='cartel'>Registro de usuario</h1>
      </Container>

      <Container>
        <Row className='justify-content-center'>
          <Col className='registro'>

            <Form className='formulario' name='myForm'>
              {Inputs.map( (formulario, index) =>{
                return(
                  <Formulario
                    input={formulario}
                    handle={handleChange}
                    value={formaaa[formulario.name]}
                  />
                )
              })}
              <Form.Group>

                <Form.Label htmlFor='Kind_of_user'>
                  Tipo de Usuario
                </Form.Label>
                <Form.Control
                id='tipo'
                as='select'
                custom
                onChange={ event => handleCambio( event, setSelect )}
                value={select}
                >
                  <option value='0'>Ninguno</option>
                  <option value='1'>Artista</option>
                  <option value='2'>Compania</option>
                </Form.Control>
              </Form.Group>

              <Form.Check
                type='switch'
                id='custom-switch'
                label='Acepto los terminos y condiciones'
                onChange={ event => handleCambio( event, setTermycondi )}
                required
              />
              <Form.Text className='error'>
                {mensaje.term}
              </Form.Text>

              <p>
                ¿Ya tienes cuenta?
                <button
                  className='boton-link'
                  onClick={handleShowModal}
                >Haz click aqui
                </button>
              </p>
              <Form.Group className='text-center' >
                <button
                  className='btn btn-primary boton-registrarme'>
                  Registrarme
                </button>
              </Form.Group>
            </Form>
          </Col><Tos />
        </Row>
      </Container>
*/}
    </>
  )
}

import React/*, { useState, useReducer, useContext }*/from 'react'
//import { Container, Row, Col, Form } from 'react-bootstrap'
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
          </Col>
          <Col className='registro terminos'>
            <h2 className='text-center'>
              Terminos y condiciones
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium praesentium, sint similique vel quis perferendis labore molestiae pariatur numquam aut natus, consectetur earum iure possimus. Odio recusandae distinctio cupiditate saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi laborum saepe consequatur, eius esse itaque animi ratione fugiat. Excepturi inventore minus, veritatis maiores porro illum blanditiis? Ipsam, fugiat, nemo. Modi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt id quisquam quasi hic. Eum amet vel ullam nesciunt itaque laudantium sunt illo, voluptas temporibus sequi quasi laborum illum, blanditiis nihil!
            </p>        
          </Col>
        </Row>
      </Container>
*/}
    </>
  )
}

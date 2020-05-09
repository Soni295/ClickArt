import React from 'react';
import './registrarse.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import {InsertarFormulario,Formulario} from '../formulario/formulario'

/*
Insertarformulario pide:
nombre:(id de input, name del imput,for para el label(usa el mismo nombre))
labelTexto:(El texto del label)
type:(El tipo de input)
placeholder:(el placeholder que se desea poner)
*/

function Registrarse() {
  const usuario= new InsertarFormulario('usuario','Usuario:','text','Jose2020' );
  const nombreCompleto= new InsertarFormulario('nombre','Nombre completo:','text','Jose Perez' );
  const email= new InsertarFormulario('email','E-mail:','email','joseperez@hotmail.con' );
  const contrasena= new InsertarFormulario('contrasena','Contraseña:','password','********' );
  const contrasena2= new InsertarFormulario('contrasena2','Confirme contraseña:','password','********' );
  const formularios=[usuario, nombreCompleto, email, contrasena, contrasena2];
  
  return(
    <>
      <Container>
        <h1 className="cartel">Registro de usuario</h1>
      </Container>
      <Container>
        <Row>
          <Col className="registro">
            <Form className="formulario" name="myForm">              
              {formularios.map( (formulario, index) =>{
                return(
                  <Formulario
                  key={index}
                  nombre={formulario.nombre}
                  labelTexto={formulario.labelTexto}
                  type={formulario.type}
                  placeholder={formulario.placeholder}                
                  />
                )
              })}
              <Form.Group>
                <Form.Label htmlFor="Kind_of_user">
                  Tipo de Usuario
                </Form.Label>
                <Form.Control id="tipo" as="select" custom>
                  <option value="0">Ninguno</option>
                  <option value="1">Artista</option>
                  <option value="1">Compania</option>
                </Form.Control>
              </Form.Group>
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Acepto los terminos y condiciones"
                required
              />
              <p>
                ¿Ya tienes cuenta? 
                <a href=" "
                  onClick={()=> alert('hola')}>
                    Haz click aqui
                </a>
              </p>
              <Form.Group className="text-center" >
                <button 
                  type="submit" 
                  className="btn btn-primary boton-registrarme">
                  Registrarme
                </button>
              </Form.Group>                      
            </Form>
          </Col>
          <Col className="registro terminos">
            <h2 className="text-center">
              Terminos y condiciones
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium praesentium, sint similique vel quis perferendis labore molestiae pariatur numquam aut natus, consectetur earum iure possimus. Odio recusandae distinctio cupiditate saepe.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi laborum saepe consequatur, eius esse itaque animi ratione fugiat. Excepturi inventore minus, veritatis maiores porro illum blanditiis? Ipsam, fugiat, nemo. Modi?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet eius. Repellat molestias a, amet repellendus voluptates, laborum nobis sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un crack si lees esto
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt id quisquam quasi hic. Eum amet vel ullam nesciunt itaque laudantium sunt illo, voluptas temporibus sequi quasi laborum illum, blanditiis nihil!
            </p>        
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Registrarse

import React ,{ useState }from 'react';
import { Button, Nav, Form, FormControl, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Conectarse from './Conectarse'
export default props => {  

  const [ buscador, setBuscador ] = useState('');
  
  const cerrarSesion = event =>{
 
    event.preventDefault()

    const url='http://localhost:8888/react/CerrarSesion'

    fetch(url, {
      method:'DELETE',
      credentials:'include'     
    })    
    .then( respuesta => respuesta.json() )
    .then( datos => {
      console.log(datos)
      if(datos.msg === 'Sesion cerrada exitosamente'){
        alert('Se ha cerrado su sesion')
        props.setSesion('')
      }
    })
  }

  const handleclickBuscador = event =>{
    
    event.preventDefault()     
  
    const url='http://localhost:8888/react/Buscador'
    
    buscador !== '' && buscador !== ' ' ?
      fetch(url,{
        method:'POST',
        credentials:'include',
        body: JSON.stringify({buscar:buscador}),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
        .then( respuesta => respuesta.json() )
        .then( datos => {
          if(datos.msg ==='No se ha encontrado nada'){
            alert('No se ha encontrado nada')
          }
          else{
          props.setconjuntoDeDibujos(datos)
          }
        })
      :
        console.log('')
  }
  
  const handleCambio = ( event, set ) => set( event.target.value )

  const handleEnter  =  event =>  event.key === 'Enter' &&  handleclickBuscador(event) 
  
  return(   
    <Navbar bg="dark" variant="dark"  expand="lg">        
      <Link to="/">
        <Navbar.Brand >
          <img
            src='/images/hi.png'
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        
        { props.sesion &&
          <Link to="/Subir">          
            <Navbar.Text>
              Subida
            </Navbar.Text> 
          </Link>
        }

        <Form className="m-auto" inline>
          <FormControl 
            onChange={event => handleCambio( event, setBuscador)}
            onKeyDown={ event => handleEnter(event)}
            className="mr-sm-2" 
            type="text" 
            placeholder="Search" 
            />
          <Button 
            variant="outline-info"
            onClick={event => handleclickBuscador(event)}
          >
            Search
          </Button>
        </Form>        
        
        <Nav>
          { !props.sesion
              ?
              <>
                <Link to="/Registrarse"> 
                  <Navbar.Text>Registrarse</Navbar.Text>               
                </Link>
                <Conectarse 
                  handleCloseMoral = {props.handleCloseMoral}
                  showMoral        = {props.showMoral}
                  handleShowMoral  = {props.handleShowMoral}
                  handleCambio     = {props.handleCambio}
                  setSesion        = {props.setSesion}
                  handleRedirect   = {props.handleRedirect}
                />
              </>
            :
              <>
                <Link to={'/Usuario/' + props.sesion[0]+ '/Mensajes'}> 
                  <Navbar.Text>Mensajes</Navbar.Text>
                </Link>
                <NavDropdown 
                  className="desplegable" 
                  title="Mi Usuario" 
                  id="collasible-nav-dropdown"
                >
                  <Link to={"/Usuario/"+ props.sesion[0]}>
                    <span 
                      className="dropdown-item"
                    >
                      Mi Perfil
                    </span>
                  </Link>
                  <Link to="/Configuraciones">
                    <span 
                      className="dropdown-item"
                    >
                      Configuraciones
                    </span>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/">
                    <span 
                      className="dropdown-item" 
                      onClick={ (event)=> cerrarSesion(event)}
                    >
                      Cerrar Sesión
                    </span>
                  </Link>
                </NavDropdown>
              </>
            }
        </Nav>
      </Navbar.Collapse>
    </Navbar>    
  );
}
import React from 'react';
import { Button, Nav, Form, FormControl, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css'
import Conectarse  from '../conectarse_moral/Conectarse'

export default (props)=> {
 
  const icon ='hi.png'
  return(   
    <Navbar bg="dark" variant="dark"  expand="lg">        
      <Navbar.Brand href="/">
        <img
          src={icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <Nav.Link href="/Subir">Subida</Nav.Link>
        </Nav>
        <Form className="m-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="/Registrarse">Registrarse</Nav.Link>
          <Conectarse 
            handleCloseMoral = {props.handleShowMoral}
            showMoral = {props.showMoral}
            handleShowMoral = {props.handleCloseMoral}/>
          <Nav.Link href="#">Mensajes</Nav.Link>
          <NavDropdown className="desplegable" title="Mi Usuario" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Perfil">Mi Perfil</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Configuraciones</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
          </NavDropdown>            
        </Nav>
      </Navbar.Collapse>
    </Navbar>    
  );
}



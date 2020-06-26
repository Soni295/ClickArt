import React, { useState } from "react";
import { Row, Col, Tab, Nav, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default (props) => {
  if (!props.sesion) return <Redirect to="/ClickArt" />;

  const handleCambio = (event, set) => set(event.target.value);

  const enviar = async (formData) => {
    /*
    const url = "http://localhost:8888/react/Configuracion/Usuario";

    formData.append("usuario", props.sesion[0]);

    const respuesta = await axios.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(respuesta);
    */
    /*
    if(datos.msg === 'conexion exitosa') {
      props.setSesion(datos.usuario)
      props.handleCloseMoral()
      props.handleRedirect()
    }    
    else{
      props.handleCloseMoral()
      alert(datos.msg)
    } 
    */
  };
  return (
    <Tab.Container>
      <Row className="justify-content-md-center">
        <Col lg="2" className="registro">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="datos">Datos Personales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="email">Email</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contrasena">Contraseña</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={4}>
          <Tab.Content>
            <Tab.Pane eventKey="usuario">usuario</Tab.Pane>
            <Tab.Pane eventKey="email">
              <Email enviar={enviar} handleCambio={handleCambio} />
            </Tab.Pane>
            <Tab.Pane eventKey="contrasena">
              <Contrasena enviar={enviar} handleCambio={handleCambio} />
            </Tab.Pane>
            <Tab.Pane eventKey="datos">
              <Datos enviar={enviar} handleCambio={handleCambio} />
            </Tab.Pane>
            <Tab.Pane eventKey="icono">icono</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

const Email = (props) => {
  const email = "Hernan@hotmail.com";

  const [confiEmail, setConfiEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const configurar = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("email", confiEmail);
    formData.append("contrasena", contrasena);

    props.enviar(formData);
  };

  return (
    <div className="registro">
      <Form.Group>
        <Form.Label htmlFor="email-email">Email:</Form.Label>
        <Form.Control
          id="email-email"
          type="email"
          placeholder={email}
          onChange={(event) => props.handleCambio(event, setConfiEmail)}
        />
      </Form.Group>
      <Form.Group className="justify-content-md-center">
        <Form.Label htmlFor="email-contrasena">Contraseña:</Form.Label>
        <Form.Control
          id="email-contrasena"
          type="password"
          placeholder="********"
          onChange={(event) => props.handleCambio(event, setContrasena)}
          required
        />
      </Form.Group>
      <div className="boton-configuracion">
        <Button variant="primary" onClick={(event) => configurar(event)}>
          Configurar
        </Button>
      </div>
    </div>
  );
};

const Contrasena = (props) => {
  const configurar = (event) => {
    event.preventDefault();

    if (nuevaContrasena === nuevaContrasena2) {
      const formData = new FormData();

      formData.append("nuevaContrasena", nuevaContrasena);
      formData.append("contrasena", viejaContrasena);
      props.enviar(formData);
    } else alert("Las contraseñas no coinciden");
  };

  const [nuevaContrasena, setNuevaContrasena] = useState(""); //revisar para q verifique
  const [nuevaContrasena2, setNuevaContrasena2] = useState("");
  const [viejaContrasena, setViejaContrasena] = useState("");

  return (
    <div className="registro">
      <Form.Group>
        <Form.Label htmlFor="contrasena-antigua">
          Antigua Contraseña:
        </Form.Label>
        <Form.Control
          id="contrasena-antigua"
          type="password"
          placeholder="********"
          onChange={(event) => props.handleCambio(event, setViejaContrasena)}
        />
      </Form.Group>

      <Form.Group className="justify-content-md-center">
        <Form.Label htmlFor="contrasena-nueva">Nueva Contraseña:</Form.Label>
        <Form.Control
          id="contrasena-nueva"
          type="password"
          placeholder="********"
          onChange={(event) => props.handleCambio(event, setNuevaContrasena)}
          required
        />
      </Form.Group>

      <Form.Group className="justify-content-md-center">
        <Form.Label htmlFor="contrasena-nueva2">
          Verifique Contraseña:
        </Form.Label>
        <Form.Control
          id="contrasena-nueva2"
          type="password"
          placeholder="********"
          onChange={(event) => props.handleCambio(event, setNuevaContrasena2)}
          required
        />
      </Form.Group>
      <div className="boton-configuracion">
        <Button variant="primary" onClick={(event) => configurar(event)}>
          Configurar
        </Button>
      </div>
    </div>
  );
};

const Datos = (props) => {
  const [configEspecialidad, setConfigEspecialidad] = useState("");
  const [configIdiomas, setConfigIdiomas] = useState("");
  const [configPais, setConfigPais] = useState("");
  const [configNombre, setConfigNombre] = useState("");

  const configurar = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("especialidad", configEspecialidad);
    formData.append("idiomas", configIdiomas);
    formData.append("pais", configPais);
    formData.append("nombre", configNombre);
    props.enviar(formData);
  };

  const especialidad = "Abogado";
  const idioma = "Español, Ingles";
  const pais = "España";
  const nombre = "Esteban";

  return (
    <div className="registro">
      <Form.Group>
        <Form.Label htmlFor="datos-nombre">Nombre</Form.Label>
        <Form.Control
          id="datos-nombre"
          type="text"
          placeholder={nombre}
          onChange={(event) => props.handleCambio(event, setConfigNombre)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="datos-especialidad">Especialidad</Form.Label>
        <Form.Control
          id="datos-especialidad"
          type="text"
          placeholder={especialidad}
          onChange={(event) => props.handleCambio(event, setConfigEspecialidad)}
        />
      </Form.Group>

      <Form.Group className="justify-content-md-center">
        <Form.Label htmlFor="datos-idiomas">Idiomas:</Form.Label>
        <Form.Control
          id="datos-idiomas"
          type="text"
          placeholder={idioma}
          onChange={(event) => props.handleCambio(event, setConfigIdiomas)}
        />
      </Form.Group>

      <Form.Group className="justify-content-md-center">
        <Form.Label htmlFor="datos-pais">Pais:</Form.Label>
        <Form.Control
          id="datos-pais"
          type="text"
          placeholder={pais}
          onChange={(event) => props.handleCambio(event, setConfigPais)}
        />
      </Form.Group>

      <div className="boton-configuracion">
        <Button variant="primary" onClick={(event) => configurar(event)}>
          Configurar
        </Button>
      </div>
    </div>
  );
};

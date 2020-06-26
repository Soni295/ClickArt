import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { InsertarFormulario, Formulario } from "./Reutilisable/formulario";
import { verificar } from "./Reutilisable/Verificador";
import { Redirect } from "react-router-dom";

export default (props) => {
  const handleCrearCuenta = (event) => {
    event.preventDefault();
    const url = "http://localhost:8888/react/Registrarse";
    setMensaje({});

    const parametros = {
      usuario: usuario,
      nombre: nombre,
      email: email,
      contrasena: contrasena,
      contrasena2: contrasena2,
      tipo: select,
      termycondi: termycondi,
    };
    setMensaje(verificar(parametros));

    if (
      mensaje.usuario === "" &&
      mensaje.nombre === "" &&
      mensaje.email === "" &&
      mensaje.contrasena === "" &&
      mensaje.term === ""
    ) {
      fetch(url, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(parametros),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          if (datos) {
            alert(datos.msg);
            props.setSesion(datos.usuario);
            props.handleRedirect();
          }
        });
    }
  };
  const [mensaje, setMensaje] = useState({});
  const [usuario, setUsuario] = useState("");
  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [contrasena, setcontrasena] = useState("");
  const [contrasena2, setcontrasena2] = useState("");
  const [select, setSelect] = useState("0");
  const [termycondi, setTermycondi] = useState("");

  const usuarioObj = new InsertarFormulario(
    "usuario",
    "Usuario:",
    "text",
    "Jose2020",
    setUsuario,
    usuario,
    mensaje.usuario
  );
  const nombreCompletoObj = new InsertarFormulario(
    "nombre",
    "Nombre completo:",
    "text",
    "Jose Perez",
    setnombre,
    nombre,
    mensaje.nombre
  );
  const emailObj = new InsertarFormulario(
    "email",
    "E-mail:",
    "email",
    "joseperez@hotmail.con",
    setemail,
    email,
    mensaje.email
  );
  const contrasenaObj = new InsertarFormulario(
    "contrasena",
    "Contraseña:",
    "password",
    "********",
    setcontrasena,
    contrasena,
    mensaje.contrasena
  );
  const contrasena2Obj = new InsertarFormulario(
    "contrasena2",
    "Confirme contraseña:",
    "password",
    "********",
    setcontrasena2,
    contrasena2
  );
  const formularios = [
    usuarioObj,
    nombreCompletoObj,
    emailObj,
    contrasenaObj,
    contrasena2Obj,
  ];

  if (props.sesion) return <Redirect to="/ClickArt" />;

  return (
    <>
      <Container>
        <h1 className="cartel">Registro de usuario</h1>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col className="registro">
            <Form className="formulario" name="myForm">
              {formularios.map((formulario, index) => {
                return (
                  <Formulario
                    key={index}
                    nombre={formulario.nombre}
                    labelTexto={formulario.labelTexto}
                    type={formulario.type}
                    placeholder={formulario.placeholder}
                    onChange={(event) =>
                      props.handleCambio(event, formulario.set)
                    }
                    value={formulario.variable}
                    span={formulario.span}
                  />
                );
              })}
              <Form.Group>
                <Form.Label htmlFor="Kind_of_user">Tipo de Usuario</Form.Label>
                <Form.Control
                  id="tipo"
                  as="select"
                  custom
                  onChange={(event) => props.handleCambio(event, setSelect)}
                  value={select}
                >
                  <option value="0">Ninguno</option>
                  <option value="1">Artista</option>
                  <option value="2">Compania</option>
                </Form.Control>
              </Form.Group>

              <Form.Check
                type="switch"
                id="custom-switch"
                label="Acepto los terminos y condiciones"
                onChange={(event) => props.handleCambio(event, setTermycondi)}
                required
              />
              <Form.Text className="error">{mensaje.term}</Form.Text>

              <p>
                ¿Ya tienes cuenta?
                <button
                  className="boton-link"
                  onClick={() => props.handleShowMoral()}
                >
                  Haz click aqui
                </button>
              </p>
              <Form.Group className="text-center">
                <button
                  onClick={(event) => handleCrearCuenta(event)}
                  className="btn btn-primary boton-registrarme"
                >
                  Registrarme
                </button>
              </Form.Group>
            </Form>
          </Col>
          <Col className="registro terminos">
            <h2 className="text-center">Terminos y condiciones</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium praesentium, sint similique vel quis perferendis labore
              molestiae pariatur numquam aut natus, consectetur earum iure
              possimus. Odio recusandae distinctio cupiditate saepe. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quo et amet eius.
              Repellat molestias a, amet repellendus voluptates, laborum nobis
              sequi atque ab, quasi inventore neque nemo sint pariatur. Iure. Un
              crack si lees esto Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quasi laborum saepe consequatur, eius esse
              itaque animi ratione fugiat. Excepturi inventore minus, veritatis
              maiores porro illum blanditiis? Ipsam, fugiat, nemo. Modi? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Quo et amet
              eius. Repellat molestias a, amet repellendus voluptates, laborum
              nobis sequi atque ab, quasi inventore neque nemo sint pariatur.
              Iure. Un crack si lees esto Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quo et amet eius. Repellat molestias
              a, amet repellendus voluptates, laborum nobis sequi atque ab,
              quasi inventore neque nemo sint pariatur. Iure. Un crack si lees
              esto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              et amet eius. Repellat molestias a, amet repellendus voluptates,
              laborum nobis sequi atque ab, quasi inventore neque nemo sint
              pariatur. Iure. Un crack si lees esto Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quo et amet eius. Repellat molestias
              a, amet repellendus voluptates, laborum nobis sequi atque ab,
              quasi inventore neque nemo sint pariatur. Iure. Un crack si lees
              esto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              et amet eius. Repellat molestias a, amet repellendus voluptates,
              laborum nobis sequi atque ab, quasi inventore neque nemo sint
              pariatur. Iure. Un crack si lees esto Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quo et amet eius. Repellat molestias
              a, amet repellendus voluptates, laborum nobis sequi atque ab,
              quasi inventore neque nemo sint pariatur. Iure. Un crack si lees
              esto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              et amet eius. Repellat molestias a, amet repellendus voluptates,
              laborum nobis sequi atque ab, quasi inventore neque nemo sint
              pariatur. Iure. Un crack si lees esto Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nesciunt id quisquam quasi hic. Eum
              amet vel ullam nesciunt itaque laudantium sunt illo, voluptas
              temporibus sequi quasi laborum illum, blanditiis nihil!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

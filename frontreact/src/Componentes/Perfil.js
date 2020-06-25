import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Galeria from "./Reutilisable/Galeria";
import VentanaPefil from "./Reutilisable/VentanaPerfil";

const DatosDePerfil = (props) => {
  const { nombre } = useParams(); //Ejemplo12

  useEffect(() => {
    async function peticion() {
      const url = "http://localhost:8888/react/Perfil/"+ nombre;

      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          if (datos.msg === "No existe ese usuario") {
            props.handleRedirect();
          } else {
            props.setInfoDelPerfil({
              nombreCompleto: datos.nombreCompleto,
              email: datos.email,
              especialidad: datos.especialidad,
              tipo: datos.tipo,
              pais: datos.pais,
              idiomas: datos.idiomas,
              icono: "/images/" + datos.icono,
              galeria: datos.galeria,
            });
          }
        });
    }
    nombre && peticion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="datos-perfil">
          <Col className="text-center datos">
            <p id="usuario-perfil">{props.infoDelPerfil.nombreCompleto}</p>
            <p id="especialidad-perfil">{props.infoDelPerfil.especialidad}</p>
          </Col>

          <Col>
            <img
              className="img-perfil"
              src={props.infoDelPerfil.icono}
              alt="Icono"
            />
          </Col>
          <Col className="text-center datos datos-secundarios">
            <p id="idioma-perfil">Idiomas:{props.infoDelPerfil.idiomas}</p>
            <p id="pais-perfil">Pais: {props.infoDelPerfil.pais}</p>
            <p id="email-perfil">E-mail: {props.infoDelPerfil.email}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Mensaje = (props) => {
  const [mensajePefil, setMensajePefil] = useState("");

  function handleSeteo(event) {
    setMensajePefil(event.target.value);
  }
  function enviar(event) {
    event.preventDefault();
    alert(mensajePefil);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={5}>
          <textarea onChange={(event) => handleSeteo(event)} />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Button
          className="mx-auto"
          variant="outline-success"
          onClick={(event) => enviar(event)}
        >
          Enviar
        </Button>
      </Row>
    </Container>
  );
};

const Vistas = (props) => {
  const [galeria, setGaleria] = useState({ display: "block" });
  const [contacto, setContacto] = useState({ display: "none" });

  const handleMostrar = (setVisible) => {
    setContacto({ display: "none" });
    setGaleria({ display: "none" });
    setVisible({ display: "block" });
  };

  return (
    <>
      <hr />
      <div>
        <ul className="vistas">
          <li>
            <button
              className="seleccion"
              onClick={() => handleMostrar(setGaleria)}
            >
              Galeria
            </button>
          </li>
          <li>
            <button
              className="seleccion"
              onClick={() => handleMostrar(setContacto)}
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
      <div>
        <VentanaPefil
          visible={galeria}
          texto={<Galeria conjuntoDeDibujos={props.infoDelPerfil.galeria} />}
        />
        <VentanaPefil visible={contacto} texto={<Mensaje />} />
      </div>
    </>
  );
};

export default (props) => {
  const [infoDelPerfil, setInfoDelPerfil] = useState("");

  return (
    <>
      <DatosDePerfil
        infoDelPerfil={infoDelPerfil}
        setInfoDelPerfil={setInfoDelPerfil}
        handleRedirect={props.handleRedirect}
      />
      <Vistas infoDelPerfil={infoDelPerfil} />
    </>
  );
};
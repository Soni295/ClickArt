import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { perfilDibujo } from "../Emulador";

export default (props) => {
  const { id } = useParams();
  const [datosDibujo, setDatosDibujo] = useState("");

  useEffect(() => {
    async function peticion() {
      const datos = perfilDibujo(id);
      console.log(datos);

      //const url = "http://localhost:8888/react/Dibujo/" + id;

      if (datos === undefined) {
        props.handleRedirect();
      } else {
        setDatosDibujo({
          usuario: datos.Usu_Nombre,
          titulo: datos.Titulo,
          archivo: "/ClickArt/images/" + datos.Nombre_del_archivo,
          descripcion: datos.Descripcion,
          icono: datos.ID_Dibujo,
        });
      }

      /*
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          if (datos.msg === "Este dibujo no existe") {
            props.handleRedirect();
          } else {
            setDatosDibujo({
              usuario: datos.Usu_Nombre,
              titulo: datos.Titulo,
              archivo: "/ClickArt/images/" + datos.Nombre_del_archivo,
              descripcion: datos.Descripcion,
              icono: datos.ID_Dibujo,
            });
          }
        });
        */
    }
    id && peticion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className="dibubo-presentacion" sm={2}>
          <Link to={"/ClickArt/Usuario/" + datosDibujo.usuario}>
            <img
              className="dibujo-icono"
              src="/ClickArt/images/icon.png"
              alt={datosDibujo.usuario}
            />
            <h2 className="text-center">{datosDibujo.usuario}</h2>
          </Link>
          <hr />
          <h2 className="text-center">{datosDibujo.titulo}</h2>
          <p className="text-center">{datosDibujo.descripcion}</p>
          <hr />
        </Col>
        <Col sm={8}>
          <img
            className="dibujo-dibujo"
            src={datosDibujo.archivo}
            alt={datosDibujo.titulo}
          />
        </Col>
        <Col className="dibubo-presentacion" sm={2}></Col>
      </Row>
    </Container>
  );
};

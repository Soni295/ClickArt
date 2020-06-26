import React, { useState } from "react";
import { Form, Container, Col } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default (props) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tags, setTags] = useState("");
  const [dibujo, setDibujo] = useState("");

  const handleEnviar = async (event) => {
    event.preventDefault();
    /*
    const formData = new FormData();
    formData.append("Titulo", titulo);
    formData.append("Descripcion", descripcion);
    formData.append("Tags", tags);
    formData.append("Dibujo", dibujo);
    formData.append("Usuario", props.sesion[0]);

    try {
      const res = await axios.post(
        "http://localhost:8888/react/SubirDibujo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      alert("Fue subido exitosamente");
    } catch (err) {
      console.log(err);
      alert("Llene todos los datos");
    }
    */
    alert("Esta funcion esta deshabilitada en la version Expo(gh-pages)");
  };
  if (!props.sesion) return <Redirect to="/" />;

  return (
    <Container className="subida-box">
      <Form className="text-center row" encType="multipart/form-data">
        <Col>
          <Form.Group>
            <div className="previa">
              <p>Previsualisacion</p>
            </div>
            <label
              className="btn btn-outline-secondary my-2 my-btn"
              htmlFor="dibujo"
            >
              Seleccione su Dibujo
            </label>
            <input
              id="dibujo"
              type="file"
              onChange={(event) => props.handleDibujoCambio(event, setDibujo)}
              required
              accept="image/*"
            ></input>
          </Form.Group>
        </Col>
        <Col className="form-de-subida">
          <input
            type="text"
            id="titulo-subida"
            onChange={(event) => props.handleCambio(event, setTitulo)}
            value={titulo}
            required
            placeholder="Titulo"
          ></input>
          <textarea
            id="descripcion"
            rows="6"
            onChange={(event) => props.handleCambio(event, setDescripcion)}
            value={descripcion}
            required
            placeholder="Descripcion"
          ></textarea>
          <textarea
            id="tags"
            onChange={(event) => props.handleCambio(event, setTags)}
            value={tags}
            placeholder="Tags deben ser con espacios y guion si van juntos, por ejemplo: renecentismo arte blanco-y-negro patata"
          ></textarea>
          <button
            onClick={handleEnviar}
            className="btn btn-primary boton-subir"
          >
            Subir
          </button>
        </Col>
      </Form>
    </Container>
  );
};

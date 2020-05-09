import React from 'react';
import './subida.css';
import { Form, Container,Col } from 'react-bootstrap'

function Subida(){
  return(
    <Container className="subida-box">
      <Form className="text-center row" encType="multipart/form-data">
        <Col>
          <Form.Group>
            <div className="previa"><p>Previsualisacion</p></div>            
            <label 
              className="btn btn-outline-secondary my-2 my-btn" 
              htmlFor="dibujo">
                Seleccione su Dibujo
            </label>
            <input 
              name="dibujo" 
              id="dibujo" 
              type="file" 
              required 
              accept="image/*">
            </input>
          </Form.Group>
        </Col>
        <Col className="form-de-subida">
          <input 
            type="text" 
            name="Titulo" 
            id="titulo-subida" required 
            placeholder="Titulo">
          </input>
          <textarea
            name="Descripcion" 
            id="descripcion" 
            rows="6" required 
            placeholder="Descripcion">
          </textarea>
          <textarea 
            name="tags" 
            id="tags"  
            placeholder="Tags deben ser con espacios y guion si van juntos, por ejemplo: renecentismo arte blanco-y-negro patata"></textarea>
          <button 
            type="submit" 
            className="btn btn-primary boton-subir">
              Subir
          </button>
        </Col>
      </Form>
    </Container>
  )
}
export default Subida
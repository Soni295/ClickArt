import React,{ useState } from 'react';
import './subida.css';
import { Form, Container,Col } from 'react-bootstrap';

export default props => {
  
  const [ titulo, setTitulo ] = useState('');
  const [ descripcion, setDescripcion ] = useState('');
  const [ tags, setTags ] = useState('');
  const [ dibujo, setDibujo ] = useState('');  

  const handleEnviar = (event) =>   {
    
    const formData = new FormData();

    formData.append('Titulo', titulo);
    formData.append('Descripcion', descripcion);
    formData.append('tags', tags);
    formData.append('Nombre_del_archivo', dibujo);
    
    event.preventDefault();
    
    const url = 'http://localhost:8888/subida';    
   
    const miInit={
      method: 'POST',
      credentials: 'include',
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        'Accept': "application/json",
        'type': "formData"
      } 
    }
    fetch( url, miInit )
    .then( respuesta => respuesta.json() )
    .then( datos => console.log( datos ) )
    .catch(console.log('Error'))
  }
  
  return(
    <Container 
      className = "subida-box"
    >
      <Form 
        className = "text-center row" 
        encType = "multipart/form-data"
      >
        <Col>
          <Form.Group>
            <div className = "previa">
              <p>
                Previsualisacion
              </p>
            </div>
            <label 
              className = "btn btn-outline-secondary my-2 my-btn" 
              htmlFor = "dibujo"
            >
              Seleccione su Dibujo
            </label>
            <input               
              id = "dibujo" 
              type = "file" 
              onChange={ ( event ) => {
                return props.handleDibujoCambio( event, setDibujo )
              }}
              required 
              accept = "image/*">
            </input>
          </Form.Group>
        </Col>
        <Col className = "form-de-subida">
          <input 
            type = "text"           
            id = "titulo-subida"
            onChange = { ( event ) => {
              return props.handleCambio( event, setTitulo )
            }}
            value = {titulo}
            required 
            placeholder = "Titulo">
          </input>
          <textarea            
            id = "descripcion" 
            rows = "6" 
            onChange = { ( event ) => {
              return props.handleCambio( event, setDescripcion )
            }}
            value = {descripcion}
            required 
            placeholder = "Descripcion">
          </textarea>
          <textarea             
            id = "tags"
            onChange={ ( event ) =>{
              return props.handleCambio( event, setTags ) 
            }}
            value = {tags}
            placeholder = "Tags deben ser con espacios y guion si van juntos, por ejemplo: renecentismo arte blanco-y-negro patata"></textarea>
          <button 
            onClick={handleEnviar} 
            className = "btn btn-primary boton-subir">
              Subir
          </button>
        </Col>
      </Form>
    </Container>
  )
}

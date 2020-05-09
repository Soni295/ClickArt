import React from 'react';
import './foot.css'

function Foot() {
  return(
    <>
      <hr/>
     <p className="pie">
      ©2020 |
      <a href="/Terminos_y_condiciones"> Terminos del servicio </a>|   
      <a href="/Privacidad"> Privacidad </a>|
      <a href="/Politica_de_subida"> Politica de Subida </a>|
      <a href="/Acerca_de_nosotros"> Acerca de nosotros</a>
     </p>
    </>
  );
}

export default Foot;
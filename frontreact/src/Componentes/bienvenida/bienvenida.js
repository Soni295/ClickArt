import React from 'react';
import './bienvenida.css'

let Usuario= 'Maria'

function Bienvenida() {
  return(    
    <div class="bienvenida">
  		<h1>Bienvenido/a {Usuario}</h1>
  	</div>    
  );
}

export default Bienvenida;

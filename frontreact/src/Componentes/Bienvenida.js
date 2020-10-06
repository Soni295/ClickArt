import React from "react";

// Bienvenida
export default ( {sesion} ) => 
  sesion ?
    <div className="cartel">
      <h1>Bienvenido/a {sesion[0]}</h1>
    </div>
      :
    <div style={{ height: "100px" }}></div>

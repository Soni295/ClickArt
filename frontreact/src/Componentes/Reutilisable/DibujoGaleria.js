import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const direccion = "/Dibujo/" + props.direccion;
  const nombre = "/images/" + props.nombre;


  return (
    <div className="caja-dibujo">
      <Link to={direccion}>
        <img className="dibujo-galeria" src={nombre} alt={props.titulo} />
      </Link>
    </div>
  );
};

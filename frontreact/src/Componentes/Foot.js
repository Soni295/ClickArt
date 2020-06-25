import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <hr />
      <p className="pie">
        ©2020 |<Link to="/Terminos_y_condiciones"> Terminos del servicio</Link>{" "}
        |<Link to="/Privacidad"> Privacidad</Link> |
        <Link to="/Politica_de_subida"> Politica de Subida</Link> |
        <Link to="/Acerca_de_nosotros"> Acerca de nosotros</Link>
      </p>
    </>
  );
};

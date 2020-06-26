import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <hr />
      <p className="pie">
        ©2020 |
        <Link to="/ClickArt/Terminos_y_condiciones">
          {" "}
          Terminos del servicio
        </Link>{" "}
        |<Link to="/ClickArt/Privacidad"> Privacidad</Link> |
        <Link to="/ClickArt/Politica_de_subida"> Politica de Subida</Link> |
        <Link to="/ClickArt/Acerca_de_nosotros"> Acerca de nosotros</Link>
      </p>
    </>
  );
};

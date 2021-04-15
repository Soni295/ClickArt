import React from "react"

export const Welcome = ({sesion}) => {

  return sesion ?
    <div className="cartel">
      <h1>Bienvenido/a {sesion[0]}</h1>
    </div>
      :
    <div style={{ height: "100px" }}></div>
}



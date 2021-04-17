import React from "react"

export const Welcome = ({sesion}) => {
  const session = {user: 'example', token: ''}
  return session ?
    <div className="welcome">
      <h1>Bienvenido/a {session.user}</h1>
    </div>
      :
    <div style={{ height: "100px" }}></div>
}



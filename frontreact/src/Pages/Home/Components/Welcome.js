import React, { useContext } from "react"
import { UserContext } from '../../../Context/UserContext'

export const Welcome = () => {
  const { session } = useContext(UserContext)
  return session.logIn ?
    <div className="welcome">
      <h1>Bienvenido/a {session.user}</h1>
    </div>
      :
    <div style={{ height: "100px" }}></div>
}

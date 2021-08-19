import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";

// Bienvenida
export default () => {
  const { session } = useContext(UserContext)

  return (
    <div className="cartel">
asd
      { session.user &&
        <h1>Bienvenido/a {session.user}</h1>
      }
    </div>
  )
}

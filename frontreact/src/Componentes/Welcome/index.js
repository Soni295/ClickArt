import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import './style.css'

export default () => {
  const { session } = useContext(UserContext)
  const welcome = session.user
    ? `Welcome ${session.user}`
    : `Welcome to the ClickArt`

  return (
    <div className="poster">
      <div className='title'>
        <h1>{welcome}</h1>
      </div>
    </div>
  )
}

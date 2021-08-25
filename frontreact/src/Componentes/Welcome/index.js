import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Title } from "../../Components/Title";
import './style.css'

export default () => {
  const { session } = useContext(UserContext)
  const welcome = session.user
    ? `Welcome ${session.user}`
    : `Welcome to the ClickArt`

  return <Title text={welcome} />
}

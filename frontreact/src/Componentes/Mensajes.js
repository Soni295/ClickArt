import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./mensajes.css";
import io from "socket.io-client";

export default (props) => {
  if (!props.sesion) return <Redirect to="/ClickArt" />;
  /*
  <Contactos sesion={props.sesion} setcontacto={setcontacto} />
  */
  const [contacto, setcontacto] = useState("");
  return (
    <div className="contenedor">
      <Chat contacto={contacto} sesion={props.sesion} />
    </div>
  );
};

const Chat = (props) => {
  const [mensajes, setMensajes] = useState();
  const [mensaje, setMensaje] = useState("");

  const socket = io("localhost:8888");

  useEffect(() => {
    socket.emit("mensajes", {
      usuario: props.sesion[0],
      contacto: props.contacto,
    });
    socket.on("todosLosMensajes", (datos) => {
      setMensajes(datos);
    });
  }, []);

  alert("Seccion en construccion");
  socket.on("actualizarMensaje", (datos) => {
    const data = mensajes;
    data.push(datos);
    setMensajes(data);
  });

  function enviarMensaje() {
    socket.emit("mensajeNuevo", {
      usuario: props.sesion[0],
      contacto: props.contacto,
      mensaje: mensaje,
    });
    return false;
  }

  const handleCambio = (event, set) => set(event.target.value);

  return (
    <div className="chat">
      <div className="titulo-chat">
        <p>{props.contacto}Hernan</p>
      </div>
      <div className="caja-chat">
        {mensajes &&
          mensajes.map((mensaje, index) => {
            if (mensaje.usuario === props.sesion[0]) {
              return (
                <div
                  className="mensaje-chat mensajes-usuario"
                  key={"a" + index}
                >
                  <p key={index}>{mensaje.mensaje}</p>
                </div>
              );
            }
            return (
              <div className="mensaje-chat mensajes-contacto" key={"a" + index}>
                <p key={index}>{mensaje.mensaje}</p>
              </div>
            );
          })}
      </div>
      <div className="caja-de-mensaje-por-enviar">
        <textarea
          className="mensaje-por-enviar"
          onChange={(event) => handleCambio(event, setMensaje)}
        />

        <button className="boton-envio" onClick={() => enviarMensaje()}>
          Enviar
        </button>
      </div>
    </div>
  );
};

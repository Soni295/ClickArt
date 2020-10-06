import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Foot from "./Componentes/Foot";
import Bienvenida from "./Componentes/Bienvenida";
import Mensajes from "./Componentes/Mensajes";
import Subida from "./Componentes/Subida";
import Registrarse from "./Componentes/Registrarse";
import Perfil from "./Componentes/Perfil";
import Galeria from "./Componentes/Reutilisable/Galeria";
import {
  TerminosYCondiciones,
  Privacidad,
  PoliticaDeSubida,
  AcercaDeNosotros,
} from "./Componentes/Info_del_sitio";
import PerfilDibujo from "./Componentes/PerfilDibujo";
import ConfiguracionesUsuario from "./Componentes/ConfiguracionesUsuario";

export const Routers = () => (
  <Router>
    {redireccion && <Redirect to="/" />}
    
      <Navbar
        handleCloseMoral={handleCloseMoral}
        handleShowMoral={handleShowMoral}
        handleCambio={handleCambio}
        setSesion={setSesion}
        handleRedirect={handleRedirect}
        setconjuntoDeDibujos={setconjuntoDeDibujos}
        showMoral={showMoral}
        sesion={sesion}
      />

      <Switch>
        <Route
          exact
          path="/Configuraciones"
          children={<ConfiguracionesUsuario sesion={sesion} />}
        />

        <Route
          exact
          path="/Mensajes"
          children={
            <Mensajes sesion={sesion} handleRedirect={handleRedirect} />
          }
        />

        <Route
          exact
          path="/"
          children={
            <>
              <Bienvenida sesion={sesion} />
              <hr />
              <Galeria conjuntoDeDibujos={conjuntoDeDibujos} />
            </>
          }
        />

        <Route
          exact
          path="/Registrarse"
          children={
            <Registrarse
              handleShowMoral={handleShowMoral}
              handleCambio={handleCambio}
              handleRedirect={handleRedirect}
              setSesion={setSesion}
              sesion={sesion}
            />
          }
        />

        <Route
          exact
          path="/Subir"
          children={
            <Subida
              handleCambio={handleCambio}
              handleDibujoCambio={handleDibujoCambio}
              handleRedirect={handleRedirect}
              sesion={sesion}
            />
          }
        />
        <Route
          exact
          path="/Terminos_y_condiciones"
          children={<TerminosYCondiciones />}
        />
        <Route exact path="/Privacidad" children={<Privacidad />} />
        <Route
          exact
          path="/Politica_de_subida"
          children={<PoliticaDeSubida />}
        />
        <Route
          exact
          path="/Acerca_de_nosotros"
          children={<AcercaDeNosotros />}
        />
        <Route
          exact
          path="/Usuario/:nombre"
          children={<Perfil handleRedirect={handleRedirect} />}
        />
        <Route
          exact
          path="/Dibujo/:id"
          children={<PerfilDibujo handleRedirect={handleRedirect} />}
        />
      </Switch>

      <Foot />
    </Router>
)

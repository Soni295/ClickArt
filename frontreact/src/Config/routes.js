import React from 'react'
import Mensajes from "../Componentes/Mensajes";
import Upload from "../Componentes/Upload/index";
import Perfil from "../Componentes/Perfil";
import {
  TerminosYCondiciones,
  Privacidad,
  PoliticaDeSubida,
  AcercaDeNosotros,
} from "../Componentes/Info_del_sitio";
import PerfilDibujo from "../Componentes/PerfilDibujo";
import ConfiguracionesUsuario from "../Componentes/ConfiguracionesUsuario";
import { Route } from 'react-router-dom'

import Home from "../Pages/Home"
import SignIn from "../Pages/SignIn"

// routes
export const RouterBox = route => (
  <Route
    path={route.path}
    render = {
      props => <route.component {...props} />
    }
  />
)

const PATH = {
  Home: '/',
  SignIn: '/SignIn',
}

class Page {
  constructor(component, path, exact=true){
    this.component = component
    this.path = path
    this.key = path
    this.exact = exact
  }
}
export default [
  new Page(TerminosYCondiciones, '/TerminosYCondiciones'),
  new Page(PoliticaDeSubida, '/PoliticaDeSubida'),
  new Page(Privacidad, '/Privacidad'),
  new Page(AcercaDeNosotros, '/Acercadenosotros'),
  new Page(Upload, '/Upload'),
  new Page(PerfilDibujo, '/Dibujo/:id'),
  new Page(Home, PATH.Home),
  new Page(SignIn, PATH.SignIn),
]

const resto = [
  new Page(Perfil, '/Usuario/:nombre'),
  new Page(ConfiguracionesUsuario, '/Configuraciones'),
  new Page(Mensajes, '/Mensajes'),
]

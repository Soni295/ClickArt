import React from 'react'
import Mensajes from "../Componentes/Mensajes";
import Upload from "../Componentes/Upload/index";
import Registrarse from "../Componentes/Registrarse";
import Perfil from "../Componentes/Perfil";
import Home from '../Pages/Home/Home'
import {
  TerminosYCondiciones,
  Privacidad,
  PoliticaDeSubida,
  AcercaDeNosotros,
} from "../Componentes/Info_del_sitio";
import PerfilDibujo from "../Componentes/PerfilDibujo";
import ConfiguracionesUsuario from "../Componentes/ConfiguracionesUsuario";
import { Route } from 'react-router-dom'
import { Path } from './Path'

export const RouterBox = route => (
  <Route
    path={route.path}
    render= {props => <route.component {...props} />}
  />
)

const dinamicRoutes = [
  {
    path: Path.Home,
    component: Home,
    exact: true
  },
  {
    path: Path.SignIn,
    component: Registrarse
  },
  {
    path: Path.Draw,
    component: PerfilDibujo
  },
  {
    path: Path.UserGallery,
    component: Perfil
  },
]

const userRoutes = [
  {
    path: Path.Upload,
    component: Upload
  },
  {
    path: Path.Settings,
    component: ConfiguracionesUsuario
  },
  {
    path: Path.Message,
    component: Mensajes
  },
]

export const footerRoutes = [
  {
    path: Path.ToS,
    component: TerminosYCondiciones,
  },
  {
    path: Path.UploadPolicy,
    component: PoliticaDeSubida,
  },
  {
    path: Path.Privacy,
    component: Privacidad,
  },
  {
    path: Path.AboutUs,
    component: AcercaDeNosotros,
  }
]

const allRoutes = []
  .concat(dinamicRoutes)
  .concat(userRoutes)
  .concat(footerRoutes)

export default allRoutes

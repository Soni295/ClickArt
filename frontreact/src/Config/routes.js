import React from 'react'
import Mensajes from "../Componentes/Mensajes";
import Upload from "../Componentes/Upload/index";
import Registrarse from "../Componentes/Registrarse";
import Perfil from "../Componentes/Perfil";
import Galeria from "../Componentes/Reutilisable/Galeria";
import {
  TerminosYCondiciones,
  Privacidad,
  PoliticaDeSubida,
  AcercaDeNosotros,
} from "../Componentes/Info_del_sitio";
import PerfilDibujo from "../Componentes/PerfilDibujo";
import ConfiguracionesUsuario from "../Componentes/ConfiguracionesUsuario";
import { Route } from 'react-router-dom'

// routes
export const RouterBox = route => (
  <Route
    path={route.path}
    render = { 
      props => <route.component {...props} />
    }
  />
)

export default [
  {
    path: '/TerminosYCondiciones',
    component: TerminosYCondiciones,
    text: ' Terminos Del Servicio '
  },
  {
    path: '/Politicadesubida',
    component: PoliticaDeSubida,
    text: ' Politica De Subida  '
  },
  {
    path: '/Privacidad',
    component: Privacidad,
    text: ' Privacidad '
  },
  {
    path: '/Acercadenosotros',
    component: AcercaDeNosotros,
    text: ' Acerca De Nosotros '
  },
  {
    path: '/Upload',
    component: Upload
  },
  {
    path: '/Dibujo/:id',
    component: PerfilDibujo 
  },
]
const resto = [
  {
    path: '/Usuario/:nombre',
    component: Perfil
  },
  {
    path: '/Configuraciones',
    component: ConfiguracionesUsuario
  },
  {
    path: '/Mensajes',
    component: Mensajes
  },
  {
    path: '/',
    component: Galeria
  },
  {
    path: '/Registrarse',
    component: Registrarse// luego tocar
  },
]

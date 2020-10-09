import Mensajes from "../Componentes/Mensajes";
import Subida from "../Componentes/Subida";
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

// routes

export default [
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
  {
    path: '/Subir',
    component: Subida
  },
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
    path: '/Usuario/:nombre',
    component: Perfil
  },
  {
    path: '/Dibujo/:id',
    component: PerfilDibujo 
  },
]

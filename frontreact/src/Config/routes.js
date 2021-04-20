import Upload from "../Componentes/Upload/index";
import { SignIn }from "../Pages/SignIn/SignIn";
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
import { Path } from './Path'

const dinamicRoutes = [
  {
    path: Path.Home,
    Component: Home,
    exact: true
  },
  {
    path: Path.SignIn,
    Component: SignIn
  },
  {
    path: Path.Draw,
    Component: PerfilDibujo
  },
  {
    path: Path.UserGallery,
    Component: Perfil
  },
]

const userRoutes = [
  {
    path: Path.Upload,
    Component: Upload
  },
  {
    path: Path.Settings,
    Component: ConfiguracionesUsuario
  }
]

export const footerRoutes = [
  {
    path: Path.ToS,
    Component: TerminosYCondiciones,
  },
  {
    path: Path.UploadPolicy,
    Component: PoliticaDeSubida,
  },
  {
    path: Path.Privacy,
    Component: Privacidad,
  },
  {
    path: Path.AboutUs,
    Component: AcercaDeNosotros,
  }
]

export const allRoutes = []
  .concat(userRoutes)
  .concat(footerRoutes)
  .concat(dinamicRoutes)

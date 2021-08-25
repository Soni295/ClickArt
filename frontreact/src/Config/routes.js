// import Upload from "../Componentes/Upload/index";
// import Perfil from "../Componentes/Perfil";

import {
  TerminosYCondiciones,
  Privacidad,
  PoliticaDeSubida,
  AcercaDeNosotros,
} from "../Componentes/Info_del_sitio";
//import PerfilDibujo from "../Componentes/PerfilDibujo";
//import ConfiguracionesUsuario from "../Componentes/ConfiguracionesUsuario";


import { Path } from './Path'
import Home from "../Pages/Home"
//import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"

class Page {
  constructor(component, path, exact=true){
    this.component = component
    this.path = path
    this.key = path
    this.exact = exact
  }
}

export default [
  new Page(Home, Path.Home),
  new Page(TerminosYCondiciones, Path.ToS),
  new Page(PoliticaDeSubida, Path.UploadPolicy),
  new Page(Privacidad, Path.Privacy),
  new Page(AcercaDeNosotros, Path.AboutUs),
  new Page(SignUp, Path.Signup),
]

/*
const temporal = [
  new Page(Upload, Path.Upload),
  new Page(PerfilDibujo, Path.Draw),
  new Page(Perfil, '/Usuario/:nombre'),
  new Page(ConfiguracionesUsuario, '/Configuraciones'),
  //new Page(Mensajes, '/Mensajes'),
]
*/

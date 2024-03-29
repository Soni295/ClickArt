// import Upload from "../Componentes/Upload/index";
// import Perfil from "../Componentes/Perfil";
// import PerfilDibujo from "../Componentes/PerfilDibujo";
// import ConfiguracionesUsuario from "../Componentes/ConfiguracionesUsuario";

import { Path } from './Path'

import Home from "../Pages/Home"
import SignUp from "../Pages/SignUp"
import { ToS, Privacy, AboutUs, UploadPolicy } from "../Pages/Statics"

class Page {
  constructor(component, path, exact=true){
    this.component = component
    this.path = path
    this.key = path + 1
    this.exact = exact
  }
}

export default [
  new Page(Home, Path.Home),
  new Page(ToS, Path.ToS),
  new Page(UploadPolicy, Path.UploadPolicy),
  new Page(Privacy, Path.Privacy),
  new Page(AboutUs, Path.AboutUs),
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

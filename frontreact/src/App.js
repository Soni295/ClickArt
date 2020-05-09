import React from 'react';
import Navbar1 from './Componentes/navbar/navbar';
import Foot from './Componentes/foot/foot';
//import Bienvenida from './Componentes/bienvenida/bienvenida';
import { 
  TerminosYCondiciones,
  Privacidad,
  PoliticaDeSubida,
  AcercaDeNosotros
} from './Componentes/Info_del_sitio/Info_del_sitio'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Subida from './Componentes/subida/subida'
import Registrarse from './Componentes/registrarse/registrarse'

function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Switch>
          <Route exact path="/Registrarse" component={Registrarse} />
          <Route exact path="/Subir" component={Subida} />
          <Route exact path="/Terminos_y_condiciones" component={TerminosYCondiciones} />   
          <Route exact path="/Privacidad" component={Privacidad} />
          <Route exact path="/Politica_de_subida" component={PoliticaDeSubida} />  
          <Route exact path="/Acerca_de_nosotros" component={AcercaDeNosotros} />
        </Switch>
        <Foot />   
      </Router>     
    </> 
  );
}
export default App;

import React , { useState } from 'react';
import Navbar from './Componentes/navbar/Navbar';
import Foot from './Componentes/foot/foot';
import Bienvenida from './Componentes/bienvenida/Bienvenida';
import { TerminosYCondiciones, Privacidad, PoliticaDeSubida, AcercaDeNosotros } from './Componentes/Info_del_sitio/Info_del_sitio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Subida from './Componentes/subida/Subida';
import Registrarse from './Componentes/registrarse/Registrarse';
import Perfil from './Componentes/Perfil/Perfil';
import Galeria from './Componentes/galeria/Galeria';

function App() {
  //Esto es para el moral de conectarse
  const [ showMoral, setShowMoral ] = useState( false );
  const handleCloseMoral = () => setShowMoral( false );
  const handleShowMoral  = () => setShowMoral( true );  

  //Esto es para la bienvenida diga el nombre del usuario
    //const [ nombreDeUsuario, setnombreDeUsuario ] = useState('Armando Esteban quito');
  
    //const nombre = ( nombreDeUsuario.split(' ')[0] )

  //Esto es para que react almacene los datos
  const handleCambio = ( event, set ) => set( event.target.value );

  const handleDibujoCambio = (event, set) => {
    set( event.target.files[0] );
  }
  return (
    <>
      <Router>
        <Navbar        
          handleCloseMoral = {handleShowMoral}
          showMoral = {showMoral}
          handleShowMoral = {handleCloseMoral}
        />
        <Switch>

          <Route exact path="/" children={
            <> 
              <Bienvenida />
              <Galeria url='http://localhost:8888/datos/Index' /> 
            </>
          }/>

          <Route exact path="/Registrarse" children={            
            <Registrarse 
            handleShowMoral = {handleShowMoral} />
          }/>

          <Route exact path="/Subir" children={
          <Subida 
            handleCambio={handleCambio}
            handleDibujoCambio={handleDibujoCambio}
          />}/>
          <Route exact path="/Terminos_y_condiciones" children={<TerminosYCondiciones />}/>  
          <Route exact path="/Privacidad" children={<Privacidad />}/> 
          <Route exact path="/Politica_de_subida" children={<PoliticaDeSubida />}/>  
          <Route exact path="/Acerca_de_nosotros" children={<AcercaDeNosotros />}/> 
          <Route exact path="/Perfil" children={<Perfil />}/> 
        </Switch>
        <Foot />   
      </Router>     
    </> 
  );
}

export default App;

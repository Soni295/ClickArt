import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navbar from './Componentes/Navbar/Navbar'
import Foot from './Componentes/Foot'
import Bienvenida from './Componentes/Bienvenida'
import Mensajes from './Componentes/Mensajes'
import Subida from './Componentes/Subida'
import Registrarse from './Componentes/Registrarse'
import Perfil from './Componentes/Perfil'
import Galeria from './Componentes/Reutilisable/Galeria'
import {
  TerminosYCondiciones,
  Privacidad,
  PoliticaDeSubida,
  AcercaDeNosotros,
} from './Componentes/Info_del_sitio'
import PerfilDibujo from './Componentes/PerfilDibujo'
import ConfiguracionesUsuario from './Componentes/ConfiguracionesUsuario'


// App
export default () => {
  const [redireccion, setRedireccion] = useState(false) //Seteo del Redirect
 // const [sesion, setSesion] = useState(['Ejemplo12', 0]) //Setea al usuario ['Ejemplo12', 0]
  const [sesion, setSesion] = useState() //Setea al usuario 
  const [showMoral, setShowMoral] = useState(false) //Seteo del moral
  const [conjuntoDeDibujos, setconjuntoDeDibujos] = useState()

  async function peticion() {
    let respuesta = await fetch('http://localhost:8888/react/Index')
    let datos = await respuesta.json()
    setconjuntoDeDibujos(datos)
  }

  useEffect(() => {
    if (!conjuntoDeDibujos) {
      peticion()
    }
    // eslint-disable-next-line
  }, [])

  const handleCloseMoral = () => setShowMoral(false) //Cierra el moral conectarse
  const handleShowMoral = () => setShowMoral(true) //Abre el moral conectarse
  const handleCambio = (event, set) => set(event.target.value) //Para Actualizar los formularios
  const handleDibujoCambio = (event, set) => set(event.target.files[0]) //Para actualizar los dibujos

  const handleRedirect = () => {
    //Redirecciona cuando se conecta o registra
    setRedireccion(true)
    setTimeout(() => {
      setRedireccion(false)
    }, 1000)
  }

  return (
    <>
      <Router>
        {redireccion && <Redirect to='/' />}

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
            path='/Configuraciones'
            children={<ConfiguracionesUsuario sesion={sesion} />}
          />

          <Route
            exact
            path='/Mensajes'
            children={
              <Mensajes sesion={sesion} handleRedirect={handleRedirect} />
            }
          />

          <Route
            exact
            path='/'
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
            path='/Registrarse'
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
            path='/Subir'
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
            path='/Terminos_y_condiciones'
            children={<TerminosYCondiciones />}
          />

          <Route exact path='/Privacidad' children={<Privacidad />} />

          <Route
            exact
            path='/Politica_de_subida'
            children={<PoliticaDeSubida />}
          />

          <Route
            exact
            path='/Acerca_de_nosotros'
            children={<AcercaDeNosotros />}
          />

          <Route
            exact
            path='/Usuario/:nombre'
            children={<Perfil handleRedirect={handleRedirect} />}
          />

          <Route
            exact
            path='/Dibujo/:id'
            children={<PerfilDibujo handleRedirect={handleRedirect} />}
          />
        </Switch>

        <hr />
        <Foot />
      </Router>
    </>
  )
}

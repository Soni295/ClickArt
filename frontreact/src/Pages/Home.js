import React from 'react'
import Welcome from '../Componentes/Welcome/index'
import Galeria from '../Componentes/Reutilisable/Galeria'

// Home
export default ({conjuntoDeDibujos}) => 
  <>
    <Welcome />
    <hr />
    <Galeria conjuntoDeDibujos={conjuntoDeDibujos} /> 
  </>

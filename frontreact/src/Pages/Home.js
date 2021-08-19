import React from 'react'
import Welcome from '../Componentes/Welcome'
import Galeria from '../Componentes/Reutilisable/Galeria'
import { useConjuntoDeDibujos } from '../hooks/useConjuntoDeDibujos'

export default () => {
  const conjuntoDeDibujos = useConjuntoDeDibujos()
  return (
    <>
      <Welcome />
      <hr />
      <Galeria conjuntoDeDibujos={conjuntoDeDibujos} />
    </>
  )
}

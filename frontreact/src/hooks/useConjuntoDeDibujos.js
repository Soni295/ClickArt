import { useState, useEffect } from 'react'
import { getGallery } from '../Services/MainGallery'

export const useConjuntoDeDibujos = () => {
  const [conjuntoDeDibujos, setconjuntoDeDibujos] = useState([])

  useEffect(() => {
    const request = async() => {
      const data = await getGallery()
      setconjuntoDeDibujos(data)
    }

    if (conjuntoDeDibujos.length === 0) request()
  }, [conjuntoDeDibujos])

  return conjuntoDeDibujos
}

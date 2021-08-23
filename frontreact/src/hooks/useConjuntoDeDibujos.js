import { useEffect } from 'react'
import { getGallery } from '../Services/MainGallery'
import { HomeGalleryReducer } from '../reducer/HomeGalleryReducer'

export const useConjuntoDeDibujos = () => {
  const [state, action] = HomeGalleryReducer()

  useEffect(() => {
    if(state.data.length === 0) {
      action.fetch()
      getGallery()
       .then(r => action.succedded(r))
       .catch(e => action.failed(e))
    }
  }, [state])

  return state
}

import React, { useState, useEffect, createContext } from 'react'

const URL = 'http://localhost:8888'

export const MainGalleryContext = createContext()

export const MainGalleryProvider = ({children}) => {
  const [gallery, setGallery] = useState(null)

  useEffect(() => {
    fetch(URL + '/react/Index')
      .then(r => r.json())
      .then(data => setGallery(data))
    } , [])

  return (
    <MainGalleryContext.Provider value = {{gallery, setGallery}}>
      {children}
    </MainGalleryContext.Provider>
  )
}

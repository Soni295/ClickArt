import React, { useState, useEffect, createContext, useContext } from 'react'
import { PATHSERVER } from '../Config/PATHSERVER'

export const MainGalleryContext = createContext()

export const MainGalleryProvider = ({children}) => {
  const [gallery, setGallery] = useState(null)

  useEffect(() => {
    fetch(PATHSERVER.Index)
      .then(r => r.json())
      .then(data => {setGallery(data)})
    } , [])

  const onSubmit = async(e, search) => {
    e.preventDefault()
    console.log(search)
    const post = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(search),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    fetch(PATHSERVER.Search, post)
      .then(r => r.json())
      .then(data => console.log(data))
  }


  return (
    <MainGalleryContext.Provider value = {{onSubmit, gallery, setGallery}}>
      {children}
    </MainGalleryContext.Provider>
  )
}

export const useMainGallery = () => useContext(MainGalleryContext)

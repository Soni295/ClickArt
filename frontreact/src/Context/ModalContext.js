import React, { createContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({children}) => {

  const [showModal, setShowModal] = useState(false)
  
  const handleCloseModal = () => 
    setShowModal(false) 
  
  const handleShowModal = () => 
    setShowModal(true) 
  
  const data = {showModal, handleShowModal, handleCloseModal}
  return(
    <ModalContext.Provider value={data}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext

import React, { createContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({children}) => {

  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  return(
    <ModalContext.Provider value={{
      showModal,
      handleShowModal,
      handleCloseModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext

import { useState } from 'react'

export const useModal = () => {
  const [modalState, setModalState] = useState(false)
  const showModal = () => setModalState(true)
  const hideModal = () => setModalState(false)
  const changeModal = () => setModalState(!modalState)
  return[modalState, showModal, hideModal, changeModal]
}

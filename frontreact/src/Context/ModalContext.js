import React, { createContext, useReducer } from 'react'
export const ModalContext = createContext()

const ACTIONTYPE = {
  ENABLE: 'enable',
  DISABLE: 'disable'
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONTYPE.ENABLE: return true
    case ACTIONTYPE.DISABLE: return false
    default: return false
  }
}

export const ModalProvider = ({children}) => {
  const [showModal, dispatch] = useReducer(reducer, false)

  const setModal = {
    enable: () => dispatch({type: ACTIONTYPE.ENABLE}),
    disable: () => dispatch({type: ACTIONTYPE.DISABLE})
  }

  return(
    <ModalContext.Provider value={{showModal, setModal}}>
      {children}
    </ModalContext.Provider>
  )
}

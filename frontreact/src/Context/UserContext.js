import React, { createContext } from 'react'
import  { UserReducer } from '../reducer/UserReducer'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const {session, userAction} = UserReducer()

  return(
    <UserContext.Provider value={{session, userAction}}>
      {children}
    </UserContext.Provider>
  )
}


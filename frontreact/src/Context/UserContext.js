import React, { createContext, useState } from 'react'

// InitialState
const initialUser = {
  user:'',
  logIn: false
}
/*
const initialUser = {
  user: 'Juan',
  logIn: true
}
*/

const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [session, setSession] = useState(initialUser)

  const data = { session, setSession }

  return(
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

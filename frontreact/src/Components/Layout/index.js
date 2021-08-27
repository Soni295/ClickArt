import React from 'react'
import Navbar from '../Navbar'
import Foot from '../../Componentes/Foot'
import { UserProvider } from '../../Context/UserContext'

export const Layout = ({children}) => (
  <UserProvider>
    <div className='layout'>
      <Navbar />
        {children}
      <Foot />
    </div>
  </UserProvider>
)

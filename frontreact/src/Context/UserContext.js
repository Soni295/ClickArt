import React, { createContext, useState, useReducer } from 'react'

// InitialState
const init = {
  user: null,
  logIn: false,
  loading: false
}
/*
const initialUser = {
  user: 'Juan',
  logIn: true
}
*/


export const actionType = {
  LOADING: 'LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'LOGOUT_ERROR',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionType.LOADING:
      return {...state, loading: true}

    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token
      }

    case actionType.LOGIN_ERROR:
      return {...state, loading: false}

    case actionType.LOGOUT_SUCCESS:
      return {...init}

    case actionType.LOGOUT_ERROR:
      return {...state, loading: false}

    default: return {...state}
  }
}

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [session, dispatch] = useReducer(reducer, init)

  const set = () => ({
    loading: () =>
      dispatch({type: actionType.LOADING}),

    loginSuccess: (session, token) =>
      dispatch({type: actionType.LOGOUT_SUCCESS, payload:{session, token}}),

    loginError: error =>
      dispatch({type: actionType.LOGIN_ERROR, payload: {error}}),

    logout: () =>
      dispatch({type: actionType.LOGOUT_SUCCESS}),
  })

  return(
    <UserContext.Provider value={{session, set}}>
      {children}
    </UserContext.Provider>
  )
}


import React, {useReducer} from 'react'

const TYPYING_USER = 'TYPYING_USER'
const TYPYING_PASS = 'TYPYING_PASS'


export const initialState = {
  user:'',
  password:''  
}

export const reducer = (state, action) => {
  switch(action.type) {
    case TYPYING_USER:
      console.log(state)
      return
    case TYPYING_PASS:
      return
    default:
      throw new Error()
  }
}

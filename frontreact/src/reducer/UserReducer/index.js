import { useReducer } from 'react'
import { initState, reducer, types} from './reducer'

export const UserReducer = () => {
  const [session, dispatch] = useReducer(reducer, initState)

  const userAction = () => ({
    loading: () =>
      dispatch({type: types.LOADING}),

    loginSuccess: (session, token) =>
      dispatch({type: types.LOGOUT_SUCCESS, payload:{session, token}}),

    loginError: error =>
      dispatch({type: types.LOGIN_ERROR, payload: {error}}),

    logout: () =>
      dispatch({type: types.LOGOUT_SUCCESS}),
  })
  return {session, userAction}
}

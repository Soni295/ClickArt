// InitialState
export const initState = {
  user: null,
  logIn: false,
  loading: false
}

export const types = {
  LOADING: 'LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'LOGOUT_ERROR',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case types.LOADING:
      return {...state, loading: true}

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token
      }

    case types.LOGIN_ERROR:
      return {...state, loading: false}

    case types.LOGOUT_SUCCESS:
      return {...initState}

    case types.LOGOUT_ERROR:
      return {...state, loading: false}

    default: return {...state}
  }
}

import { useReducer } from 'react'
import { types, reducer } from './reducer'

const initialState = {
  data: [],
  loading: null,
  error: null
}

export const HomeGalleryReducer = () => {
  const [state, dispatch] = useReducer(reducer,initialState)

  const action = {
    fetch: () => dispatch({type: types.FETCH}),
    succedded: data => dispatch({type: types.SUCCESSED, payload: {data}}),
    failed: error => dispatch({type: types.FAILED, payload: {error}}),
  }

  return [state, action]
}

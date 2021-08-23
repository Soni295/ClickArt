export const types = {
  FETCH: 'FETCH',
  SUCCESSED: 'SUCCESSED',
  FAILED: 'FAILED'
}

export const reducer = (state, action) => {
  switch(action.type){
    case types.FETCH:
      return {...state, loading: true}
    case types.SUCCESSED:
      return {...state, loading: false, data: action.payload.data}
    case types.FAILED:
      return {...state, loading: false, error: action.payload.error}
    default:
      console.log('error in the fetch')
      return {...state}
  }
}

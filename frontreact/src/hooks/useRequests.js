export const URL = 'http://localhost:8888'
export const useGet = async(endPoint) => {
  return await(await fetch(URL + endPoint)).json()
}

/*
export const usePost = (endPoint, data) => {
  const post = {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }
  return await(await fetch(URL + endPoint, post)).json()
}
*/

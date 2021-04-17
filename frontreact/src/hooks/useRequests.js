export const URL = 'http://localhost:8888'

export const PATHSERVER = {
  Index: URL + '/react/Index',
  Search: URL + '/react/Buscador'
}

export const usePost = endPoint =>
  async (e, form) => {
    e.preventDefault()
    const post = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(form),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    return fetch(URL + endPoint , post).then(r => r.json())
  }

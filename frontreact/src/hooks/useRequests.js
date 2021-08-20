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

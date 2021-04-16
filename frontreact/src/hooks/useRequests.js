export const URL = 'http://localhost:8888'

export const usePost = endPoint =>

  async function (e, form) {
    e.preventDefault()
    const post = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(form),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const data = fetch(URL + endPoint , post).then(r => r.json())

  }




/*
const crudder = domain => endPoint => {
  const url = `${domain}/${endPoint}`
  return ({
    post: value => 
      fetch(url, {
        method:"POST",
        credentials:"include",
        body:JSON.stringify(value),
        headers:{"Content-Type": "application/json"}
      })
        .then( r => r.json())
        .catch(e => console.log(e)),
    get: () => 
      fetch(url)
        .then(r => r.json())
        .catch(e => console.log(e)),
    put: () => console.log('creado'),
    delete: () => console.log('creado')
  })
}

*/
const domain = 'http://localhost:8888'

const requestLogIn = domain => endPoint => async (value) => 
  fetch( (domain + '/' + endPoint), {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(value),
    headers: {'Content-Type': 'application/json'}
  })
  .then(r => r.json())
  .catch(e => console.log(e))

export const handleLogIn = requestLogIn(domain)('react/Conectarse')

// import { Redirect } from 'react-router-dom'

const crudder = site => endPoint => {
  const url = `${site}/react${endPoint}`
  const get = () => console.log(data, url)
  const post = data => console.log(data, url)
  const put = data => console.log(data, url)
  const del = data => console.log(data, url)

  return {get, put, post, del}
}

const request = crudder('http://localhost:8888')
const aaa = backEnd('aa')

/*
export default () => {
  
}
*/

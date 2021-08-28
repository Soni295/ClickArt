import { PATHSERVER } from '../Config/PATHSERVER'

const postSet = (values) => {
  return {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }
}

export const getGallery = async() => (
  fetch(PATHSERVER.Index).then(res => res.json())
)

export const SearchGallery = async() => (
  fetch(PATHSERVER.Search).then(res => res.json())
)

export const fetchSignUp = async(values) => {
  fetch(PATHSERVER.SignUp, postSet(values))
    .then(res => res.json())
    .then(res => console.log(res))
}

export const fetchLogIn = async(values) => {
  fetch(PATHSERVER.LogIn, postSet(values))
    .then(res => res.json())
    .then(res => console.log(res))
}

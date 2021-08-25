import { PATHSERVER } from '../Config/PATHSERVER'

export const getGallery = async() => (
  fetch(PATHSERVER.Index).then(res => res.json())
)

export const SearchGallery = async() => (
  fetch(PATHSERVER.Search).then(res => res.json())
)

export const SignUp = async() => {
  fetch(PATHSERVER.SignUp).then(res => res.json())
}

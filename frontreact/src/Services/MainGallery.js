const BASEURL = 'http://localhost:8888'
const DRAW = BASEURL + '/Draw'
const MainGallery = DRAW + '/MainGallery'

export const getGallery = async() => (
  fetch(MainGallery)
    .then(res => res.json())
)

const BASEURL = 'http://localhost:8888/react/'

export const getGallery = async() => {
  const res = await fetch(BASEURL + 'Index')
  const data = await res.json()
  return data
}

export const Path = {
  Home: '/',
  Draw: '/Dibujo/:id',
  UserGallery: '/Usuario/:nombre',
  SignIn: '/Sing_In',
  Upload: '/Upload',
  Settings: '/Configuraciones',
  ToS: '/Terminos_Y_Condiciones',
  UploadPolicy: '/Politica_de_subida',
  Privacy: '/Privacidad',
  AboutUs: '/Acerca_de_nosotros'
}

export const linkToText = link => link.replace(/\//g, '').replace(/_/g, ' ')

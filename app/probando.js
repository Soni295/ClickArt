const bcrypt= require('bcrypt');

async function encritador(contra){
  const salt = await bcrypt.genSalt(10)
  let hash = await bcrypt.hash(contra , salt)
  return hash
}


async function leer(contraseña){
  password = await encritador(contraseña)
  console.log(password)
}

leer('sdasasdas')
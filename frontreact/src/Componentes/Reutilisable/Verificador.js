function verificar(parametros){  
  
  let mensajeFinal={}
  
  mensajeFinal.usuario = vUsuario(parametros.usuario)

  mensajeFinal.nombre = vNombre(parametros.nombre)

  mensajeFinal.contrasena = vContrasenas(parametros.contrasena, parametros.contrasena2)  

  mensajeFinal.email = vEmail(parametros.email)

  mensajeFinal.term = vTeminosYCondiciones(parametros.termycondi)

  return mensajeFinal
}

function vTeminosYCondiciones(termycondi){
  let mensaje;
  
  if(termycondi !== 'on') {
    mensaje='Tiene que aceptar los terminos y condiciones'
  }
  else mensaje=''
  
  return mensaje
}

function vUsuario(usuario){
  let mensaje;

  if(!usuario) mensaje = "complete este espacio"
  else if (usuario.length <6) mensaje="El usuario debe tener 6 caracteres minimo."
  else if (usuario.length >20) mensaje="El usuario debe tener 20 caracteres maximo."
  else mensaje=''

  return mensaje
}

function vNombre(nombre){
  let mensaje;

  if(!nombre) mensaje = "complete este espacio"
  else if (nombre.length <6) mensaje="El nombre debe tener 6 caracteres minimo."
  else if (nombre.length >20) mensaje="El nombre debe tener 20 caracteres maximo."
  else mensaje=''

  return mensaje  
}

function vContrasenas(contra1,contra2){
  let mensaje;

  if(contra1 === '') mensaje ='complete este espacio'
  else if(contra1 !== contra2 ) mensaje ='La contraseñas no coinciden'
  else if(contra1.length > 25) mensaje='La contraseña debe tener 25 caracteres maximo.'
  else if(contra1.length <= 8) mensaje='La contraseña debe tener 8 caracteres minimo.'
  else mensaje=''
  
  return mensaje  
}

function vEmail(email){
  let mensaje;
  
  if(email === '') {
    mensaje='complete este espacio'
  }
  else if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    mensaje ='El mail esta mal escrito'
  }
  else mensaje=''

  return mensaje
}


export{verificar}
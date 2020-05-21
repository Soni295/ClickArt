const filtroRegistrar = ( parametros, acepto ) => {
  if(acepto!== 'on'){
    alert('Debes aceptar terminos y condiciones')
    return false
  }
  if(parametros.usuario.length < 8 || parametros.usuario.length > 15 ){
    alert('El usuario debe tener entre 8 y 15 caracteres')
    return false
  }
  else if(parametros.email.indexOf('@') === -1 || parametros.email.indexOf('.') === -1) {
    alert('El mail esta mal escrito')
    return false
  }
  else if( parametros.contrasena !== parametros.contrasena2){
    alert('Las contraseñas no coinciden')
    return false
  }
  else{
    return true
  }
}


export{filtroRegistrar}



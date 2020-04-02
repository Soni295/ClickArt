function crear_cuenta(usuario,email,contrasena,contrasena2,tipo) {
  var usuario,email,contrasena,contrasena2,tipo;

  usuario = document.forms["myForm"]["usuario"].value;
  email = document.forms["myForm"]["email"].value;
  contrasena = document.forms["myForm"]["contrasena"].value;
  contrasena2 = document.forms["myForm"]["contrasena2"].value;
  tipo = document.forms["myForm"]["tipo"].value;
 
  return validar(usuario ,email ,contrasena ,contrasena2);

}

function validar(usuario ,email ,contrasena ,contrasena2) {
  
  let check1 = validar_usuario(usuario);
  let check2 = validar_contrasena(contrasena,contrasena2);
  let check3 = true//validar_email(email);

  if(check1 == false || check2 == false || check3 == false) {
    return false;
  }
  else{ 
    return true

  }  
}

function validar_usuario(user) { 
  
  if ( user == "" ) {
    alert ("Llene la casilla de usuario");
    return false;
  }
  else if( user.length > 20 ) {
    alert("el nombre de usuario es muy largo.(20 caracteres max)");
    return false;
  }
  else if( user.length < 6 ) {
    alert("el nombre de usuario es muy corto.(6 caracteres minimo)");
    return false;

  }
}

function validar_contrasena(contra1,contra2) {
  
  if (contra1 != contra2){
    alert("Las contraseñas no coinciden.");
    return false;
  }
  else if( contra1.length > 20 ) {
    alert("contraseña muy larga.(20 caracteres max)");
    return false;
  }
  else if( contra1.length < 8 ) {
    alert("contraseña muy corta.(8 caracteres minimo)");
    return false;
  }
  else{return true;}
  
}


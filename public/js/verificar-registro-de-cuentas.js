//Es para validad la cuenta al momento de crearse
function crear_cuenta(usuario,email,contrasena,contrasena2,tipo){  
  //pido todos los datos
  var usuario,email,contrasena,contrasena2,tipo;

  usuario = document.forms["myForm"]["usuario"].value;
  email = document.forms["myForm"]["email"].value;
  contrasena = document.forms["myForm"]["contrasena"].value;
  contrasena2 = document.forms["myForm"]["contrasena2"].value;
  tipo = document.forms["myForm"]["tipo"].value;
  
 //los mando a las diferentes verificaciones

  let check1 = validar_usuario(usuario);
  let check2 = validar_contrasena(contrasena,contrasena2);
  let check3 = validar_email(email);// pendiente
  
  //si todas pasan bien envia el formulario, caso contrario informa por que no

  if(check1 == false || check2 == false || check3 == false){
    alert('no creada');
    return false;
  }
  else{ 
    alert('creada');
    return true
  }  
}

function validar_usuario(user){  
  //verifica que no este vacio/ min 6 max 20 letras

  if ( user == "" ){
    alert("Llene la casilla de usuario");
    return false;
  }
  else if( user.length > 20 ){
    alert("el nombre de usuario es muy largo.(20 caracteres max)");
    return false;
  }
  else if( user.length < 6 ){
    alert("el nombre de usuario es muy corto.(6 caracteres minimo)");
    return false;
  }
  else{return true} 
}

function validar_contrasena(contra1,contra2){  
  //verifica que las contraseñas sean iguales min 8 max 20

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
  else{return true}  
}

function validar_email(email){
  // verifico que el email tenga @ y .

  if(email.indexOf('@')== -1 || email.indexOf('.') ==-1) {  
    alert("Escriba bien el email") 
    return false
  }
  else if( email.length > 20 ) {
    alert("email muy largo.(20 caracteres max)");
    return false;
  }
  else if( email.length < 8 ) {
    alert("email muy corto.(8 caracteres minimo)");
    return false;
  }

  else{return true}
}
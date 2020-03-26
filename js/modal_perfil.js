function vistaPag(Nombre){

  var i, ventana, seleccion;

  ventana =document.getElementsByClassName("ventana");

  for(i=0; i < ventana.length;i++){
    ventana[i].style.display="none";
  }

  seleccion = document.getElementsByClassName("seleccion");

  for (i = 0; i < seleccion.length; i++) {
    seleccion[i].style.backgroundColor = "";
  }
  
  document.getElementById(Nombre).style.display = "block";

}
document.getElementById("porDefecto").click();

function vistaPag(Nombre){
  var ventana, seleccion;

  ventana =document.getElementsByClassName("ventana");

  for(let i=0; i < ventana.length; i++){
    ventana[i].style.display="none";
  }

  seleccion = document.getElementsByClassName("seleccion");

  for (let i = 0; i < seleccion.length; i++) {
    seleccion[i].style.backgroundColor = "";
  }
  
  document.getElementById(Nombre).style.display = "block";

}
document.getElementById("porDefecto").click();

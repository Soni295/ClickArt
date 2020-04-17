let dire1= 'http://localhost:3000/datos/Usuarios/';
let dire2= 'http://localhost:3000/datos/Galerias/';

document.getElementById("porDefecto").click();//     permite cambiar la vista de la navegacion
peticion(dire1).then(portadaDePerfil);//             pide los datos del usuario y los pone enla portada
peticion(dire2).then(galeria);//                     pide las imagenes y las pone en la galeria

async function peticion(url){

  let respuesta= await fetch(url);
  let datos= await respuesta.json();
  return datos;

}

function portadaDePerfil(datos){
  
  let nombre = datos[0].Nombre_Completo;
  let email = datos[0].Usu_Email;
  let Especialidad = datos[0].Especialidad;
  let Idiomas = datos[0].Idiomas;
  let Pais = datos[0].Pais;
  
  let portada =`
    <div class="row">
      <div class="col text-center dato">
        <p id="nombre">${nombre}</p>
        <p id="especialidad">${Especialidad}</p>
      </div>
      <div class="col">
      <!--<img src="" class="img-perfil" alt="icono">              temporalmente   -->
      </div>
      <div class="col text-center dato">            
        <p>${Idiomas}</p>
        <p>${Pais}</p>
        <p>${email}</p>
      </div>
    </div>`
  
  let perfil =document.getElementById('perfil');
  
  perfil.innerHTML=portada
}

function galeria(datos) {
  
  var galeria=`<div class="row">`
  
  for(let i= 0; i< datos.length;i++){
    let dibujo=datos[i].Nombre_del_archivo;
    let direccion=datos[i].ID_Dibujo;
    
    galeria += `
    <div class="column column-mio">
      <a href="/Dibujo/${direccion}">
        <img src="../../images/${dibujo}" alt="">
      </a>
    </div>`
  }
  galeria+=`</div>`
  
  let contenador=document.getElementById("galeria");
  
  contenador.innerHTML=galeria;

}

function vistaPag(Nombre){
  var ventana =document.getElementsByClassName("ventana");

  for(let i=0; i < ventana.length; i++){
    ventana[i].style.display="none";
  }

  document.getElementById(Nombre).style.display = "block";

}

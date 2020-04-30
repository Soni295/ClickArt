function injectarhtml(id,variable){
  let html = document.getElementById(id)
  html.innerHTML = variable
}

var modal = document.getElementById('id01');

async function iniciar(){
  let informacion=await datos()
  await plantilla(informacion)  
}
iniciar()

//esta plantilla sirve para generar la barra de navegacion y el pie de paguina
async function plantilla(datos){

  var subida         =''
  var registrarse    =''
  var iniciarSesion  =''
  var configuraciones=''
  var mensajes       =''

  if (datos){
    subida=`
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/subida">Subida</a>
      </li>
    </ul>`

    mensajes=`
    <li class="nav-item">
      <a class="nav-link"  href="/Mensajes">Mensajes</a>   
    </li>`
  
    configuraciones=` 
    <li class="nav-item dropdown">    
      <a class="nav-link dropdown-toggle" href="#"
        id="navbarDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Soporte
      </a>   
      <div class="dropdown-menu menu-deplegable" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/usuario/${datos.usuario[0]}">Mi Usuario</a>
        <a class="dropdown-item" href="/usuario/Configuracion">Configuraciones</a>
        <div class="dropdown-divider separador"></div>
        <a class="dropdown-item" href="/CerrarSesion" method="get">Salir</a>
      </div>
    </li>`
  }
  else{    
    registrarse=`
    <li class="nav-item">
      <a class="nav-link"  href="/resgistrarse">Registrarse</a>   
    </li>`

    iniciarSesion=`
    <li class="nav-item">
      <a class="nav-link" onclick="document.getElementById('id01').style.display='block'" href="#">Conectarse</a>
                      
      <div id="id01" class="modal">
        <form id="conectar" name="conectar" onsubmit="return conectarse()" class="modal-content animate my-form" action="/IniciarSesion" method="post">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" 
            class="close" title="Close Modal">&times;</span>
          </div>

          <div class="container">
            <label for="nDeUsuario"><b>Usuario:</b></label>
            <input id="nDeUsuario" class="search" type="text" placeholder="Enter Username" name="nDeUsuario" required>

            <label for="contraDeUsuario"><b>Contraseña:</b></label>
            <input id="contraDeUsuario" class="search" type="password" placeholder="Pon tu contrseña" name="contraDeUsuario" required>
            
            <button class="login" type="submit">Conectarse</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Recuerdame
            </label>
          </div>

          <div class="container" >
            <button class="login login2" type="button"
              onclick="document.getElementById('id01').style.display='none'" 
              class="cancelbtn">Cancel</button>
            <span class="psw">Olvidastes <a href="#">tu contraseña</a></span>
          </div>
        </form>
      </div>
    </li>`
  }

  let barra=`
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">  
      <a class="navbar-brand" href="/">
        <img src="../../images/hi.png" height="30px" alt="">
      </a>      

      <!-- responsive -->
      <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" 
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>     

      <!-- boton subida --> 
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      ${subida}

        <!-- buscador -->
        <form class="form-inline my-form" action="/" method="GET">            
          <input id="texto-buscado" class="form-control mr-sm-2 search" type="search" method="GET" placeholder="Search" aria-label="Search">
          <button id="busqueda" class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>

        <!-- Registrarse -->
        <ul class="navbar-nav">   
          ${registrarse}
          
          <!-- ingresar  con moral -->
          ${iniciarSesion}

          ${mensajes}

          <!-- barra desplegable -->      
         ${configuraciones}
        </ul>
      </div>
    </nav>`;

  let enlases= `
    <hr>
    <ul>
      <li><p>©2020</p></li>
      <li><p>|</p></li>
      <li><a href="terminos">Terminos del servicio</a></li>
      <li><p>|</p></li>
      <li><a href="privacidad"> Privacidad</a></li>
      <li><p>|</p></li>
      <li><a href="politica_de_subida">Politica de Subida</a>
    </ul>`;

  injectarhtml('barra-de-navegacion',barra);
  injectarhtml('pie-de-pag',enlases);
}
      
window.onclick = (event)=>{
        
  if (event.target == modal) {

    modal.style.display = "none";  
  }
}
/*
function conectarse(nDeUsuario,contraDeUsuario){  
  let usuario = document.forms["conectar"]["nDeUsuario"].value; 
  let email = document.forms["conectar"]["contraDeUsuario"].value;
  return false;
}*/

async function datos(){  
  
  let direccion= 'http://localhost:3000/datos/Usuario';

  try{ 
    let respuesta= await fetch(direccion);
    let dato= await respuesta.json()
    return dato 
  }catch{
    let dato=null;
    console.log(dato)
    return dato
  }  
}

let palabra;
const distancia= { uno:'', dos:'../../'};

let bnav0=document.getElementById("nav0");
let bnav1=document.getElementById("nav1");
let pie0=document.getElementById("lin0");
let pie1=document.getElementById("lin1");

if(bnav0){
  palabra=distancia.uno;
}

else if(bnav1){
  palabra=distancia.dos;
}

let barra=`
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">       

    <!-- icon -->
    <a class="navbar-brand" href="${palabra}index.html"><!--***************************************-->
      <img src="${palabra}../../images/hi.png" height="30px" alt=""><!--***************************************-->
    </a>      

    <!-- responsive -->
    <button class="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>     

    <!-- boton upload -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="${palabra}subida.html">Subida</a><!--***************************************-->
        </li>
      </ul>

      <!-- buscador -->
      <form class="form-inline my-form">            
        <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>

      <!-- Registrarse -->
      <ul class="navbar-nav">   
        <li class="nav-item">
          <a class="nav-link"  href="${palabra}Resgistrarse.html">Registrarse</a> <!--***************************************-->      
        </li>
        
        <!-- ingresar  con moral ------------------------------------------------->
        <li class="nav-item">
          <a class="nav-link" onclick="document.getElementById('id01').style.display='block'" href="#">Conectarse</a>
        
          <div id="id01" class="modal">
            <form class="modal-content animate my-form" action="/action_page.php" method="post">
              <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" 
                class="close" title="Close Modal">&times;</span>
              </div>

              <div class="container">
                <label for="uname"><b>Usuario:</b></label>
                <input class="search" type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Contraseña:</b></label>
                <input class="search" type="password" placeholder="Enter Password" name="psw" required>
                
                <button class="login" type="submit">Conectarse</button>
                <label>
                  <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
              </div>

              <div class="container" >
                <button class="login login2" type="button"
                  onclick="document.getElementById('id01').style.display='none'" 
                  class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
              </div>
            </form>
          </div>


        </li>

        <!-- barra desplegable -->      
        <li class="nav-item dropdown">    
          <a class="nav-link dropdown-toggle" href="#"
            id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Soporte
          </a>

          <!-- deplegador de opciones -->   
          <div class="dropdown-menu menu-deplegable" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a><!--***************************************-->
            <a class="dropdown-item" href="Users/patata/imagen.html">Another action</a><!--***************************************-->
            <div class="dropdown-divider separador"></div>
            <a class="dropdown-item" href="Users/patata/artist.html">Cuenta Prueba</a><!--***************************************-->
          </div>
        </li>
      </ul>
    </div>
  </nav>`

let enlases=`

  <hr>
  <ul>
    <li><p>©2020</p></li>
    <li><p>|</p></li>
    <li><a href="${palabra}Terms of Service.html">Terminos del servicio</a></li>
    <li><p>|</p></li>
    <li><a href="${palabra}Privacy.html"> Privacidad</a></li>
    <li><p>|</p></li>
    <li><a href="${palabra}Upload Policy.html">Politica de Subida</a></li>
  </ul>`;

if(bnav0){

  bnav0.innerHTML += barra;

  pie0.innerHTML += enlases;

}else

if(bnav1){

  bnav1.innerHTML += barra;

  pie1.innerHTML += enlases;
}
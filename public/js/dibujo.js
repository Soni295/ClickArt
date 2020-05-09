async function dibujo(){
  
  let direccion='http://localhost:8888/datos/Dibujos';

  let respuesta= await fetch(direccion);
  let datos= await respuesta.json();
  console.log(datos)

  let nombre = datos[0].Nombre_Completo;
  let titulo = datos[0].Titulo;
  let Descripcion = datos[0].Descripcion;
  let usuario = datos[0].Usu_Nombre;
  let dibujo = datos[0].Nombre_del_archivo;
  let icono = datos[0].icono;


  let generador=`
  <div class="row">
    <div class="col-3 text-center Datos_dibujo" style="border-right: 1px white solid; align-items:center">
      <div>
        <div>
        <a href="/usuario/${usuario}">
        <p style="" ><img style="width: 60px;
        height: 60px;
        border-radius: 100px;
        object-fit: cover;
        margin-top: 30px;" src="../images/${icono}" style="" alt="">
          ${nombre}</p>
        </a>
        
          <p>${titulo}</p>
        </div>            
        <p style="text-align: left;">${Descripcion}</p>           
        <hr>             
      </div>                
    </div>
    <div class="col-9">
      <img style="width: 100%;box-sizing: border-box; justify-content: center;" src="../images/${dibujo}" alt="">
    </div>
  </div>`



  let perfil = document.getElementById('perfil_dibujo')
  perfil.innerHTML=generador
}

dibujo();
async function dibujo(){
  
  let direccion='http://localhost:3000//datos/Dibujos';

  let respuesta= await fetch(direccion);
  let datos= await respuesta.json();
  console.log(datos)

  let nombre = datos[0].Nombre_Completo;
  let titulo = datos[0].Titulo;
  let Descripcion = datos[0].Descripcion;
  let ID_Usuario = datos[0].ID_Usuario;
  let dibujo = datos[0].Nombre_del_archivo;
  let ID_Icono = datos[0].ID_Icono;





  let generador=`
  <div class="row">
    <div class="col-3 text-center Datos_dibujo" style="border-right: 1px white solid; align-items:center">
      <div>
        <div>
        <a href="/usuario/${ID_Usuario}">
          <p>icono usuario</p>
          <p>${nombre}</p>
        </a>
        
          <h1>${titulo}</h1>
        </div>            
        <h2>${Descripcion}</h2>           
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
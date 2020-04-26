async function index(){

  let url= 'http://localhost:3000//datos/Index'

  let respuesta =  await fetch(url)
  var dibujos= await respuesta.json()
  var orden=0;
  var plantilla='<div class="column column-mio">\n';

  try{
    for(let i=0; i<36;i++){
      let Archivo = dibujos[i].Nombre_del_archivo;
      let direccion = dibujos[i].ID_Dibujo;
      if (orden==6){
        plantilla +='</div>';  
        plantilla +='<div class="column column-mio">';
        orden=0;
      }
      orden++;

      plantilla+=`  <a href="/Dibujo/${direccion}"><img class="item" src="../../images/${Archivo}" alt=""></a>\n`
    }
  }
  catch{
    plantilla +='</div>';
  }
    //plantilla +=` <p>${lista[1].Nombre_del_archivo}</p>`
    
    plantilla +='</div>';
    
    let vistaPrincipal=document.getElementById("principal");
    
    vistaPrincipal.innerHTML=plantilla;
}

index();
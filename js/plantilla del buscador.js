//generador  
var inventar = ()=>{
  let bd = {"dibujo":[{}]};
  
  var contador= 0;
  
  const name  = 
  ["1.jpg","2.png","3.png","4.png","5.jpg",
   "6.png","7.jpg","8.png","9.png","10.png"
  ];
  
  for(let i = 0; i<72;i++){
    
    if (contador==10){
      contador =0;
    }
  
  bd.dibujo[i]= {"ID-imagen":i,"src":name[contador],"link":'#'/*("link"+(i+1))*/};
    contador+=1;
  }
  return bd
}
//buscador

let bd = inventar();
let vistaPrincipal=document.getElementById("principal");

//aca mostrara lo q le pase

var plantilla="";
var orden=0;
for(let i=0; i<72;i++){
  
  let link = bd.dibujo[i]["link"];
  let src = bd.dibujo[i]["src"];
 
  if (i==0){
    plantilla +='<div class="column column-mio">\n'    
  }
  else if (orden==6){
    plantilla +='</div>\n';  
    plantilla +='<div class="column column-mio">\n';
    orden=0;
  }
  orden++;

  plantilla+=`  <a href="${link}"><img class="item" src="../images/${src}" alt=""></a>\n`
}

plantilla +='</div>';  


vistaPrincipal.innerHTML=plantilla;
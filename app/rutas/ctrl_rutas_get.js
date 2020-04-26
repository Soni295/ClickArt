//modulos
const path = require('path');
const miDire = path.join(__dirname, '/../../public/html/');
const pool = require('../basededatos/database.js');


//Datos

async function datosIndex(req,res){/*este esta bien*/
  let peticion='SELECT ID_Dibujo,Nombre_del_archivo ';
  peticion   +='FROM dibujo ';
  peticion   +='ORDER BY dibujo. '
  peticion   +='ID_Dibujo DESC';
  let datos = await(pool.query(peticion));
  res.json(datos);
}

async function datosUsuarios(req,res){ 
  let peticion ='SELECT Usu_Nombre,';
  peticion    +=  'Usu_Email,Usu_tipo,';
  peticion    +=  'Nombre_Completo,Especialidad,';
  peticion    +=  'Idiomas,Pais ';
  peticion    +='FROM usuarios ';
  peticion    +=`WHERE Usu_Nombre = '${req.session.nombre}'`;/*ver el tema de la imagen de portada*/
  let datos = await(pool.query(peticion));
  res.json(datos);
}

async function sesion(req,res){//para obtener los datos
  await res.json(req.session.usuario)
}

async function datosGalerias(req,res){  
  let peticion ='SELECT * FROM dibujo ';
  peticion    +=`WHERE Usu_Nombre = '${req.session.nombre}'`;
  let datos = await(pool.query(peticion));   
  res.json(datos);  
}

async function datosDibujos(req,res){  
  let peticion = `SELECT Nombre_Completo,`;
  peticion    += `Titulo,ID_Icono, `;
  peticion    += `Descripcion,`;
  peticion    += `Nombre_del_archivo,`;
  peticion    += `usuarios.ID_Usuario,`;
  peticion    += `dibujo.ID_Dibujo `;
  peticion    += `FROM usuarios INNER JOIN `;
  peticion    += `dibujo on `;
  peticion    += `dibujo.ID_Usuario = `;
  peticion    += `usuarios.ID_Usuario `;
  peticion    += `WHERE ID_dibujo =2`;//--------------------------------------modificar
  let datos = await(pool.query(peticion)); 
  res.json(datos)  
}




async function index(req,res){ // ver que onda
  res.sendFile(miDire +'index.html'); 
}

function dibujo(req,res){
  res.sendFile(miDire +'Imagen.html');
  var id = req.params.id;
  return id
}

module.exports = { 
  datosIndex, datosUsuarios,
  datosDibujos, datosGalerias,
  index, dibujo,
  sesion
}
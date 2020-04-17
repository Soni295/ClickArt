const path = require('path');
const miDire = path.join(__dirname, '/../public/html/');
const pool = require('./basededatos/database.js');
const fs =require('fs');

//Datos

async function datosIndex(req,res){
  let datos = await(pool.query('SELECT * FROM `dibujo` ORDER BY `dibujo`.`ID_Dibujo` DESC'));
  res.json(datos);
}
async function datosUsuarios(req,res){  
  let datos = await(pool.query(`SELECT ID_Usuario,Usu_Nombre,Usu_Email,Usu_tipo,Nombre_Completo,Especialidad,Idiomas,Pais 
    FROM usuarios WHERE ID_Usuario= ${nombre}`));
  res.json(datos);
}
async function datosGalerias(req,res){  
  let datos = await(pool.query(`SELECT * FROM dibujo WHERE ID_Usuario = ${nombre} AND Visible=1`));   
  res.json(datos);
}
async function datosDibujos(req,res){
  
  let datos = await(pool.query(`SELECT Nombre_Completo,Titulo,ID_Icono
  ,Descripcion,Nombre_del_archivo,usuarios.ID_Usuario,dibujo.ID_Dibujo 
  FROM usuarios INNER JOIN dibujo on 
  dibujo.ID_Usuario = usuarios.ID_Usuario WHERE ID_dibujo =${id}`));
  await res.json(datos);
 
}
async function artist(req,res){  
  res.sendFile(miDire +'artist.html');
  return nombre=req.params.nombre//<-funciono pero espero q no se rompa esta mierda
}


async function index(req,res){ // ver que onda
  res.sendFile(miDire +'index.html',{validate:true});
  console.log(req.validate)
}

function privacidad(req,res){
  res.sendFile(miDire +'privacidad.html');
  
}
function politicaDeSubida(req,res){
  res.sendFile(miDire +'politica_de_subida.html'); 
}
function terminos(req,res){
  res.sendFile(miDire +'terminos.html'); 
}

function noEncontrado(req,res){  
  res.status(404).sendFile(miDire +'no_encontrado.html');
}
function dibujo(req,res){
  res.sendFile(miDire +'Imagen.html');
  return id = req.params.id;
}

function resgistrarse(req,res){
  res.sendFile(miDire +'resgistrarse.html');
}
async function resgistrarseExitoso(req,res){
  res.sendFile(miDire +'index.html');

  let datos={
    Usu_Nombre:req.body.usuario,
    Usu_Email:req.body.email,
    Usu_Contrasena:req.body.contrasena,
    Usu_tipo:req.body.Kind_of_user
  }
  await pool.query('INSERT INTO usuarios set ?',[datos]);
}
function subida(req,res){  
  res.sendFile(miDire +'subida.html');
}
async function subidaExitosa (req,res){// modificar a donde va la cosa
  res.sendFile(miDire +'index.html');
  var tags = (req.body.tags).split(" ");

  let datos={
    Titulo: req.body.Titulo,
    Descripcion: req.body.Titulo,
    Nombre_del_archivo: req.file.filename
  }
  await pool.query('INSERT INTO dibujo set ?',[datos])
  console.log(datos);
  console.log(tags); 
}
function borrada(req,res){
  res.send('imagen borrada');
}

module.exports = { 
  datosIndex,
  datosUsuarios,
  datosDibujos,
  datosGalerias,
  index,
  privacidad,
  politicaDeSubida,
  resgistrarse,
  resgistrarseExitoso,
  terminos,
  artist,
  dibujo,
  subida,
  subidaExitosa,
  noEncontrado,
  borrada
}
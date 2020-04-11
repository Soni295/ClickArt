const path = require('path');
const miDire = path.join(__dirname, '/../public/html/');
const pool = require('./basededatos/database.js');
const fs =require('fs');

//Datos

async function datosIndex(req,res){
  var lista = await(pool.query('SELECT * FROM `dibujo` ORDER BY `dibujo`.`ID_Dibujo` DESC'));
  res.json(lista)
}
async function datosUsuarios(req,res){
  var lista = await(pool.query('SELECT * FROM `usuarios`'));
  res.json(lista)
}
async function datosDibujos(req,res){
  var lista = await(pool.query('SELECT * FROM `dibujo`'));
  res.json(lista)
}



async function index(req,res){ // ver que onda
  res.sendFile(miDire +'index.html');  
}

function privacidad(req,res){
  res.sendFile(miDire +'privacidad.html');
}
function politicaDeSubida(req,res){
  res.sendFile(miDire +'politica_de_subida.html'); 
  console.log(req.body)
}
function terminos(req,res){
  res.sendFile(miDire +'terminos.html'); 
}
function artist(req,res){
  res.sendFile(miDire +'artist.html');

  var lista = await(pool.query('SELECT * FROM `usuarios` WHERE `ID_Usuario` = '));
    console.log(lista);

}



function noEncontrado(req,res){  
  res.status(404).sendFile(miDire +'no_encontrado.html');
}
function dibujo(req,res){
  res.sendFile(miDire +'Imagen.html');
}

function resgistrarse(req,res){
  res.sendFile(miDire +'resgistrarse.html');
}
async function resgistrarseExitoso(req,res){
  res.sendFile(miDire +'index.html');
  console.log(req.body)

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
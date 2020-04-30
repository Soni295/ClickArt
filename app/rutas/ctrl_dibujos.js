const path = require('path');
const miDire = path.join(__dirname, '/../../public/html/');
const pool = require('../basededatos/database.js');
var tags =''

async function dibujoCreado(req,res){
  res.redirect('/')
  
  tags += (req.body.tags).split(" ");/*ver tags*/ 
  
  let datos={
    Titulo: req.body.Titulo,
    Descripcion: req.body.Descripcion,
    Nombre_del_archivo: req.file.filename,
    Usu_Nombre:req.session.usuario.usuario[0]    
  }

  await pool.query('INSERT INTO dibujo set ?',[datos]);  
}

function dibujo(req,res){  

}

function modificarDibujo(req,res){

}

function borrarDibujo(req,res){

}

module.exports={
  dibujoCreado, dibujo,
  modificarDibujo, borrarDibujo    
}
const path = require('path');
const miDire = path.join(__dirname, '/../../public/html/');
const pool = require('../basededatos/database.js');
var tags =''

function crearDibujo(req,res){
  res.sendFile(miDire +'subida.html');
}

async function dibujoCreado(req,res){
  res.redirect('/')
  
  tags += (req.body.tags).split(" ");
  
  let datos={
    Titulo: req.body.Titulo,
    Descripcion: req.body.Titulo,
    Nombre_del_archivo: req.file.filename,
    Usu_Nombre:req.session.usuario.usuario[0]    
  }
  console.log(datos)  

  await pool.query('INSERT INTO dibujo set ?',[datos]);
  
}









function dibujo(req,res){  

}
function modificarDibujo(req,res){

}
function borrarDibujo(req,res){

}

module.exports={
  crearDibujo,dibujoCreado,
  dibujo, modificarDibujo,
  borrarDibujo    
}
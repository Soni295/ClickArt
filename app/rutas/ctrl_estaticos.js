const path = require('path');
const miDire = path.join(__dirname, '/../../public/html/');

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

module.exports = {
  privacidad, politicaDeSubida, terminos, noEncontrado
};
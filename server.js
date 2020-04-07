const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const rutas = require('./src/rutas');
const miDire = __dirname+'/public/html/';



app.use(express.static(__dirname + '/public'));//me permite usar lo q esta en publico en la busquedad poner static adelante
rutas(app,miDire);

server.listen(3000,()=>{
  console.log('Corriendo en el puerto 3000')
});
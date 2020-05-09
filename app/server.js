//modulos
const express = require('express');                          //Llamo a express 
const app = express();                                       //Activo la app
const server = require('http').createServer(app);            //Monto el server
const enrutador = require('./rutas/rutas');                  //enlases
const {subida} = require('./multer/multer');                 //subir imagenes
const {sesion} = require('./sesiones/session');              //para conectarser
const path = require('path');

app.use(express.static(path.join(__dirname, '/../public')));//Para poder usar los css y los js de public
app.use(subida);                                            //para subir las imagener con el multer
app.use(sesion);
app.use(express.urlencoded({extended:false}));               //para obtener los formularios desde el backend
app.use(express.json());

//rutas
app.use('',enrutador);

//server
server.listen(8888,()=>{                                     //Monto el server en el puerto 3000
  console.log('Corriendo en el puerto 8888');
});
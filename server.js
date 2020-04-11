const express = require('express');                          //Llamo a express 
const app = express();                                       //Activo la app
const server = require('http').createServer(app);            //Monto el server
const path = require('path');                                //para unir la direccion o serparar
const multer =  require('multer'); 
const enrutador = require('./app/rutas');//enlases
const uuid = require('uuid/v4');                              //generador de ID aleatorio
app.use(express.static(__dirname + '/public'))               //Para poder usar los css y los js de public

//Middlewares
const storage = multer.diskStorage({
  destination:path.join(__dirname ,'/public/images'),//destino
  filename:(req,file,cb)=>{
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix+ (path.extname(file.originalname)))
  },
});
app.use(multer({
  storage,
  dest:path.join(__dirname ,'/public/images'),
  limits:{fileSize:10000000},//10mb maximo de tamaño
  fileFilter:(req,file,callback)=>{
    const filetypes = /jpeg|png|jpg/;//aca nombro los archivos permitido
    const mimetype = filetypes.test(file.mimetype);
    const extname =filetypes.test(path.extname(file.originalname));
    if(mimetype || extname){
      return callback(null,true);
    }
    callback('Archivo no validao')
  }
  }).single('dibujo')
);

app.use(express.urlencoded({extended:false}));//para obtener los formularios desde el backend
app.use(express.json());
app.use('',enrutador)

server.listen(3000,()=>{                                     //Monto el server en el puerto 3000
  console.log('Corriendo en el puerto 3000')
});
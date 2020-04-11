const express = require('express');
const controlador = require('./ctrl_rutas_get');
const User = require('./ctrl_user');
const enrutador =  express.Router();//El router va a manejar las rutas
const pool = require('./basededatos/database.js');
/*
enrutador.get('/resgistrarse', User.crear)
enrutador.post('/resgistrarse', User.crear2)
enrutador.get('/Configuracion/User/:', User.modificiar)
enrutador.get('/Configuracion/User/Delete/:id', User.borrar)
*/
enrutador.get('/datos/index', controlador.datosIndex);
enrutador.get('/datos/Usuarios', controlador.datosUsuarios);
enrutador.get('/datos/Dibujos', controlador.datosDibujos);


enrutador.get('/', controlador.index)
         .get('/privacidad', controlador.privacidad)
         .get('/politica_de_subida', controlador.politicaDeSubida)
         .get('/resgistrarse', controlador.resgistrarse)
         .post('/resgistrarse', controlador.resgistrarseExitoso)
         .get('/terminos', controlador.terminos)
         .get('/usuario/:id', controlador.artist)
         .get('/dibujo/:id', controlador.dibujo)
         .get('/subida', controlador.subida)
         .post('/subida', controlador.subidaExitosa)
         .get('/dibujo/:id/borrado', controlador.noEncontrado)
         .get('*', controlador.noEncontrado)


module.exports = enrutador;


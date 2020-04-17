const express = require('express');
const controlador = require('./ctrl_rutas_get');
const enrutador =  express.Router();//El router va a manejar las rutas
const pool = require('./basededatos/database.js');

enrutador
.get('/datos/Index', controlador.datosIndex)
.get('/datos/Usuarios', controlador.datosUsuarios)
.get('/datos/Dibujos', controlador.datosDibujos)
.get('/datos/Galerias', controlador.datosGalerias)

.get('/', controlador.index)

.get('/privacidad', controlador.privacidad)
.get('/politica_de_subida', controlador.politicaDeSubida)
.get('/terminos', controlador.terminos)

.get('/resgistrarse', controlador.resgistrarse)
.post('/resgistrarse', controlador.resgistrarseExitoso)
.get('/usuario/:nombre', controlador.artist)
.get('/dibujo/:id', controlador.dibujo)
.get('/subida', controlador.subida)
.post('/subida', controlador.subidaExitosa)

.get('*', controlador.noEncontrado)

module.exports = enrutador;


const enrutador   = require('express').Router();
const controlador = require('./ctrl_rutas_get');
const estatico    = require('./ctrl_estaticos');
const usuario     = require('./ctrl_usuarios');
const dibujo      = require('./ctrl_dibujos');

//El router va a manejar las rutas
enrutador
.get('/datos/Index', controlador.datosIndex)
.get('/datos/Usuarios', controlador.perfilUsuario)
.get('/datos/Dibujos', controlador.datosDibujos)
.get('/datos/Galerias', controlador.datosGalerias)
.get('/datos/Usuario',controlador.datosDeSesion )// No se como esto esta funcionando

.get('/', estatico.index)

.get('/resgistrarse', estatico.resgistrarse)
.post('/resgistrarse', usuario.comparadorDeUsuarios,usuario.usuarioCreado)

.post('/IniciarSesion',usuario.iniciarSesion)
.get('/CerrarSesion', usuario.cerrarSesion)

.get('/usuario/Configuracion',usuario.permisoDeUsuario , estatico.configuraciones)/*usuario.permisoDeUsuario */
.post('/usuario/Configuracion', usuario.usuariomodificado)

.get('/subida',usuario.permisoDeUsuario, estatico.subida)
.post('/subida', dibujo.dibujoCreado)

.get('/usuario/:nombre', usuario.artist)
.get('/dibujo/:id', controlador.dibujo)

.get('/privacidad', estatico.privacidad)
.get('/politica_de_subida', estatico.politicaDeSubida)
.get('/terminos', estatico.terminos)

.get('*', estatico.noEncontrado)

module.exports = enrutador;





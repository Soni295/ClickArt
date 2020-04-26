const enrutador   = require('express').Router();
const controlador = require('./ctrl_rutas_get');
const estatico    = require('./ctrl_estaticos');
const usuario     = require('./ctrl_usuarios');
const dibujo      = require('./ctrl_dibujos');

//El router va a manejar las rutas

enrutador
.get('/datos/Index', controlador.datosIndex)
.get('/datos/Usuarios', controlador.datosUsuarios)
.get('/datos/Dibujos', controlador.datosDibujos)
.get('/datos/Galerias', controlador.datosGalerias)
.get('/datos/Usuario',controlador.sesion )

.get('/', controlador.index)


.get('/resgistrarse', usuario.crearUsuario)
.post('/resgistrarse', usuario.comparadorDeUsuarios,usuario.usuarioCreado)

.post('/IniciarSesion',usuario.iniciarSesion )
.get('/CerrarSesion', usuario.cerrarSesion)


.get('/usuario/Configuracion',usuario.permisoDeUsuario ,usuario.modificarUsuario)/*usuario.permisoDeUsuario */
.post('/usuario/Configuracion', usuario.usuariomodificado)

.get('/subida',usuario.permisoDeUsuario, dibujo.crearDibujo)
.post('/subida', dibujo.dibujoCreado)

.get('/usuario/:nombre', usuario.artist)
.get('/dibujo/:id', controlador.dibujo)

.get('/privacidad', estatico.privacidad)
.get('/politica_de_subida', estatico.politicaDeSubida)
.get('/terminos', estatico.terminos)

.get('*', estatico.noEncontrado)

module.exports = enrutador;





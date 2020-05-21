const enrutador   = require('express').Router();
const controlador = require('./ctrl_rutas_get');
const estatico    = require('./ctrl_estaticos');
const usuario     = require('./ctrl_usuarios');
const dibujo      = require('./ctrl_dibujos');
const react       = require('./ctrl_react');


//El router que maneja las rutas de react
enrutador
.post('/react/SubirDibujo', react.subirDibujo)
.post('/react/Registrarse', react.comparadorDeUsuarios,react.registrarUsuario)
.post('/react/Conectarse', react.iniciarSesion)
.post('/react/Perfil', react.perfil)
.post('/react/Buscador', react.buscador)
.get('/react/Index', react.datosIndex)
.post('/react/Dibujo', react.dibujo)
.put('/react/Configuracion/Usuario', react.configuracionUsuario)
.delete('/react/CerrarSesion', react.cerrarSesion)


//El router va a manejar las rutas
enrutador
.get('/datos/Index', controlador.datosIndex)
.get('/datos/Usuarios', controlador.perfilUsuario)
.get('/datos/Dibujos', controlador.datosDibujos)
.get('/datos/Galerias', controlador.datosGalerias)
.get('/datos/Usuario',controlador.datosDeSesion )

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
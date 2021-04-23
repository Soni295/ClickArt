const app = require("express")();
const react = require("./ctrl_react");

app.use('/User', require('./ctrl_user/index'))

module.exports = app;





/*
  .post("/react/SubirDibujo", react.subirDibujo)
  .post(
    "/react/Registrarse",
    react.comparadorDeUsuarios,
    react.registrarUsuario
  )
  .post("/react/Conectarse", react.iniciarSesion)
  .get("/react/Perfil/:nombre", react.perfil)
  .post("/react/Buscador", react.buscador)
  .get("/react/Index", react.datosIndex)
  .get("/react/Dibujo/:id", react.dibujo)
  .put("/react/Configuracion/Usuario", react.configuracionUsuario)
  .delete("/react/CerrarSesion", react.cerrarSesion);

*/

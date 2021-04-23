const { USER } = require('../tables')

const LogIn = async(req, res) => {

  const peticion = `
  SELECT ${USER.USER}, ${USER.PASSWORD}
  FROM ${USER.TABLE} WHERE ${USER.USER} = ? `

  const user = {
    user: req.body.user,
    password: req.body.password
  }

  console.log(peticion)
}

module.exports = LogIn

async function iniciarSesion(req, res) {

  console.log(req)

  await pool.query(peticion, async (err, result, fields) => {
    if (err) console.log(err);
    else if (!result[0]) {
      return res.status(404).json({
        usuario: "no existe",
        msg: "El usuario no existe"
      })
    } else {
      const contrasena = await bcrypt.compare(
        req.body.contrasena,
        result[0][USUARIO.contrasena]
      );

      if (contrasena) {
        const datosDeLaSesion = [
          result[0][USUARIO.usuario],
          result[0][USUARIO.tipoDeUsuario],
        ];

        req.session.usuario = [datosDeLaSesion];

        res.status(200).json({
          msg: "conexion exitosa",
          usuario: datosDeLaSesion,
        });
      } else return res.status(404).json({ msg: "La contraseña no coincide" });
    }
  });
}

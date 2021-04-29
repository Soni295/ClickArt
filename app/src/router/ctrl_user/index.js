const route = require('express').Router()

route
  .post("/SignUp", require('./routes/signUp'))
  .post("/LogIn", require('./routes/LogIn'))

module.exports = route


/*
async function perfil(req, res) {
  const peticion = `
  SELECT
  ${TABLAUSUARIO}.${USUARIO.nombreCompleto},
  ${TABLAUSUARIO}.${USUARIO.email},
  ${TABLAUSUARIO}.${USUARIO.tipoDeUsuario},
  ${TABLAUSUARIO}.${USUARIO.especialidad},
  ${TABLAUSUARIO}.${USUARIO.idiomas},
  ${TABLAUSUARIO}.${USUARIO.pais},
  ${TABLAUSUARIO}.${USUARIO.icono},
  ${TABLADIBUJO}.${DIBUJO.id},
  ${TABLADIBUJO}.${DIBUJO.nombreDelArchivo}
  FROM
  ${TABLAUSUARIO},
  ${TABLADIBUJO}
  WHERE
  ${TABLAUSUARIO}.${USUARIO.icono} =
  ${TABLADIBUJO}.${DIBUJO.id}
  AND
  ${TABLAUSUARIO}.${USUARIO.usuario} =
  '${req.params.nombre}'`;

  const peticion2 = `
    SELECT
    ${DIBUJO.id},
    ${DIBUJO.titulo},
    ${DIBUJO.nombreDelArchivo}
    FROM
    ${TABLADIBUJO}
    WHERE ${TABLADIBUJO}.${DIBUJO.nombreDelUsuario} =
    '${req.params.nombre}'
  `;

  const dibujos = await pool.query(peticion2);

  await pool.query(peticion, async (err, result, fields) => {
    if (err) console.log(err);

    result[0]
      ? res.json({
          nombreCompleto: result[0][USUARIO.nombreCompleto],
          email: result[0][USUARIO.email],
          especialidad: result[0][USUARIO.especialidad],
          tipo: result[0][USUARIO.tipoDeUsuario],
          pais: result[0][USUARIO.pais],
          idiomas: result[0][USUARIO.idiomas],
          icono: result[0][DIBUJO.nombreDelArchivo],
          galeria: dibujos,
        })
      : res.json({ msg: "No existe ese usuario" });
  });
}

async function cerrarSesion(req, res) {
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.json({ msg: "hubo un error" });
    } else {
      res.clearCookie("mibd");
      res.json({ msg: "Sesion cerrada exitosamente" });
    }
  });
  console.log(req.session);
}


async function configuracionUsuario(req, res) {
  let peticion = `UPDATE ${TABLAUSUARIO} SET `;
  let valores = [];

  function estaElDatoVacio(datoRecibido, tabla) {
    if (datoRecibido) {
      if (peticion.indexOf("?") === -1) {
        return `${TABLAUSUARIO}.${tabla} = ?`;
      } else {
        return `, ${TABLAUSUARIO}.${tabla} = ?`;
      }
    } else return "";
  }

  function sumarDato(datoRecibido) {
    if (datoRecibido) {
      return datoRecibido;
    } else return;
  }

  peticion += estaElDatoVacio(req.body.especialidad, USUARIO.especialidad);
  peticion += estaElDatoVacio(req.body.idiomas, USUARIO.idiomas);
  peticion += estaElDatoVacio(req.body.pais, USUARIO.pais);
  peticion += estaElDatoVacio(req.body.nombre, USUARIO.nombreCompleto);
  peticion += estaElDatoVacio(req.body.email, USUARIO.email);
  peticion += estaElDatoVacio(req.body.nuevaContrasena, USUARIO.contrasena);

  peticion += `
  WHERE ${TABLAUSUARIO}.${USUARIO.usuario} =
  '${req.body.usuario}'`;

  let data = [
    req.body.especialidad,
    req.body.idiomas,
    req.body.pais,
    req.body.nombre,
    req.body.email,
    req.body.nuevaContrasena,
  ];

  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      valores.push(data[i]);
    }
  }

  await pool.query(peticion, valores, (err, result, fields) => {
    if (err) console.log(err);

    !result[0]
      ? res.json({ msg: "No se pudo actualizar" })
      : res.json({ msg: "Se actualizo perfectamente" });
  });

  /*
  if(req.body.contrasena){
    console.log('especialidad')
  }

  if (req.body.nuevaContrasena) {
    console.log("cambio de contraseña");
  }

  res.json(req.body);
}

async function comparadorDeUsuarios(req, res, next) {
  const peticion = `
  SELECT ${USUARIO.usuario}
  FROM ${TABLAUSUARIO}
  Where ${USUARIO.usuario} = "${req.body.usuario}"`;
  const nombre = await pool.query(peticion);

  nombre[0] ? res.json({ msg: "ese usuario ya existe" }) : next();
}

  */

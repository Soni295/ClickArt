const path = require("path");
const pool = require("../basededatos/database.js");
const bcrypt = require("bcrypt");


async function comparadorDeUsuarios(req, res, next) {
  const peticion = `
  SELECT ${USUARIO.usuario}
  FROM ${TABLAUSUARIO}
  Where ${USUARIO.usuario} = "${req.body.usuario}"`;
  const nombre = await pool.query(peticion);

  nombre[0] ? res.json({ msg: "ese usuario ya existe" }) : next();
}

async function registrarUsuario(req, res) {
  const hash = await encriptador(req.body.contrasena);

  const Insercionsql = ` INSERT INTO ${TABLAUSUARIO}(
    ${USUARIO.usuario},
    ${USUARIO.nombreCompleto},
    ${USUARIO.email},
    ${USUARIO.contrasena},
    ${USUARIO.tipoDeUsuario})
    VALUES(
    '${req.body.usuario}',
    '${req.body.nombre}',
    '${req.body.email}',
    '${hash}',
     ${req.body.tipo})`;

  await pool.query(Insercionsql, (err, result, fields) => {
    if (err) {
      console.log(err);
      return res.json({ msg: "No se pudo registrar" });
    } else {
      const datosDeLaSesion = [req.body.usuario, req.body.tipo];
      req.session.usuario = datosDeLaSesion;

      return res.status(200).json({
        msg: "Se pudo registrar exitosamente",
        usuario: [datosDeLaSesion],
      });
    }
  });
}

async function iniciarSesion(req, res) {

  console.log(req)

  const peticion = `
  SELECT
  ${USUARIO.usuario},
  ${USUARIO.contrasena},
  ${USUARIO.tipoDeUsuario}
  FROM ${TABLAUSUARIO}
  WHERE ${USUARIO.usuario} = '${req.body.usuario}' `;

  await pool.query(peticion, async (err, result, fields) => {
    if (err) console.log(err);
    else if (!result[0]) {
      return res
        .status(404)
        .json({ usuario: "no existe", msg: "El usuario no existe" });
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

async function subirDibujo(req, res) {
  if (req.files === null) {
    return res.status(400).json({ msg: "No llego ningun archivo" });
  }

  const indice = path.join(__dirname, "/../../frontreact/public/images/");

  const dibujo = req.files.Dibujo;
  const extencion = "." + dibujo.name.split(".")[1];
  dibujo["name"] =
    Date.now() + "-" + Math.round(Math.random() * 1e9) + extencion;

  let datos = {
    Titulo: req.body.Titulo,
    Descripcion: req.body.Descripcion,
    Nombre_del_archivo: dibujo.name,
    Usu_Nombre: req.body.Usuario,
  };
  await pool.query("INSERT INTO dibujo set ?", [datos]);

  dibujo.mv(`${indice}${dibujo.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({
      fileName: dibujo.name,
      filePath: `${indice}${dibujo.name}`,
    });
  });
}

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

async function datosIndex(req, res) {
  const peticion = `
  SELECT ${DIBUJO.id}, ${DIBUJO.titulo},
  ${DIBUJO.nombreDelArchivo}
  FROM ${TABLADIBUJO}
  ORDER BY ${TABLADIBUJO}.${DIBUJO.id} DESC`;

  let datos = await pool.query(peticion);
  res.json(datos);
}

async function dibujo(req, res) {
  const peticion = `
  SELECT
  ${TABLADIBUJO}.${DIBUJO.titulo},
  ${TABLADIBUJO}.${DIBUJO.nombreDelArchivo},
  ${TABLADIBUJO}.${DIBUJO.descripcion},
  ${TABLADIBUJO}.${DIBUJO.nombreDelUsuario},
  ${TABLAUSUARIO}.${USUARIO.icono}
  FROM
  ${TABLADIBUJO},
  ${TABLAUSUARIO}
  WHERE
  ${TABLADIBUJO}.${DIBUJO.id} = '${req.params.id}'
  `;

  await pool.query(peticion, async (err, result, fields) => {
    if (err) console.log(err);

    !result[0]
      ? res.json({ msg: "Este dibujo no existe" })
      : res.json(result[0]);
  });
}

async function buscador(req, res) {
  const peticion = `
  SELECT
  ${DIBUJO.id},
  ${DIBUJO.titulo},
  ${DIBUJO.nombreDelArchivo}
  FROM ${TABLADIBUJO}
  WHERE ${DIBUJO.titulo} LIKE '%${req.body.buscar}%'
  OR ${DIBUJO.nombreDelUsuario} LIKE '%${req.body.buscar}%'
  `;

  await pool.query(peticion, async (err, result, fields) => {
    if (err) console.log(err);

    result[0]
      ? res.json(result)
      : res.json({ msg: "No se ha encontrado nada" });
  });
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
  */

  if (req.body.nuevaContrasena) {
    console.log("cambio de contraseña");
  }

  res.json(req.body);
}

module.exports = {
  subirDibujo,
  registrarUsuario,
  comparadorDeUsuarios,
  iniciarSesion,
  perfil,
  buscador,
  datosIndex,
  dibujo,
  cerrarSesion,
  configuracionUsuario,
}

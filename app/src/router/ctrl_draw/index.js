const route = require('express').Router()

route
  .get('/MainGallery/', require('./MainGallery'))



module.exports = route





/*
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
*/




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


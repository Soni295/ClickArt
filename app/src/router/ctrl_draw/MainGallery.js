const { DRAW } = require('../tables')

const pool = require('../../basededatos/database');

const MainGallery = async(req, res) => {

  const peticion = `
  SELECT ${DRAW.ID}, ${DRAW.TITLE},
  ${DRAW.FILE_NAME}
  FROM ${DRAW.TABLE}
  ORDER BY ${DRAW.TABLE}.${DRAW.ID} DESC`

  let datos = await pool.query(peticion);
  res.json(datos);
}

module.exports = MainGallery

const { promisify } = require("util")
const mysql = require("mysql")
const database = require("./keys")

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
  if (err) console.log(err.code)
  if (connection) connection.release();
  return;
})

//promesas en base de datos
pool.query = promisify(pool.query);
module.exports = pool;

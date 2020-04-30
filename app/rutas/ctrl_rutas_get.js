//modulos
const path = require('path');
const miDire = path.join(__dirname, '/../../public/html/');
const pool = require('../basededatos/database.js');

//Datos

async function datosIndex(req,res){/*pide los dibujos para el index */
  
  let peticion =`
  SELECT ID_Dibujo,
  Nombre_del_archivo 
  FROM dibujo
  ORDER BY dibujo.
  ID_Dibujo DESC`

  let datos = await(pool.query(peticion));
  res.json(datos);
}

async function perfilUsuario(req,res){/* */
  
  let peticion =`
  SELECT Usu_Nombre,
  Usu_Email,Usu_tipo,
  Nombre_Completo,Especialidad,
  Idiomas,Pais 
  FROM usuarios 
  WHERE Usu_Nombre = '${req.session.nombre}'`
  
  let datos = await(pool.query(peticion));
  res.json(datos);
}

async function datosGalerias(req,res){/*para motra los dibujos de la galeria*/
  
  let peticion =`
  SELECT * FROM dibujo 
  WHERE Usu_Nombre = '${req.session.nombre}'`
  
  let datos = await(pool.query(peticion));   
  res.json(datos);  
}

function datosDeSesion(req,res){/*para la barra de navegacion si esta logeado capas poner async*/
  res.json(req.session.usuario)
}

function dibujo(req,res){
  req.session.dibujo = req.params.id;
  res.sendFile(miDire +'Imagen.html');
}

async function datosDibujos(req,res){  
  
  let peticion = `
  SELECT Nombre_Completo,
  Titulo, usuarios.Usu_Nombre,
  Descripcion,
  Nombre_del_archivo,
  dibujo.ID_Dibujo, 
  usuarios.ID_Dibujo as 'icono' 
  FROM usuarios INNER JOIN 
  dibujo on 
  dibujo.Usu_Nombre = 
  usuarios.Usu_Nombre 
  WHERE dibujo.ID_dibujo = '${req.session.dibujo}'`;//--------------------------------------modificar
  
  let datos = await(pool.query(peticion));
  
  let peticion2 =`
  SELECT Nombre_del_archivo
  from dibujo 
  WHERE ID_Dibujo= ${datos[0].icono}`

  let icono = await(pool.query(peticion2))
  datos[0].icono=icono[0].Nombre_del_archivo//solo el nombre del archivo al icono

  res.json(datos)  
}



module.exports = { 
  datosIndex, perfilUsuario,
  datosDibujos, datosGalerias,
  dibujo, datosDeSesion
}
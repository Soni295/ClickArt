const path = require('path');
const miDire = path.join(__dirname, '/../../public/html/');
const pool = require('../basededatos/database.js');
const bcrypt= require('bcrypt');


function crearUsuario(req,res){
  res.sendFile(miDire +'resgistrarse.html');
}

//Compara si el usuario ya existe en la base de datos
async function comparadorDeUsuarios(req,res,next){
  let peticion=`SELECT Usu_Nombre `;
  peticion +=`FROM usuarios `;

  let nombres = await(pool.query(peticion));
  let existe = false
  
  nombres.find((nombre)=>{
    if(nombre.Usu_Nombre==req.body.usuario){
      existe+=1
    }
  })

  if(existe){
    res.send('ese usuario ya existe')/*mandar paguina q diga q no*/
  }
  else{
    next()
  } 
}

//Encriptador
async function encritador(contraseña){
  const salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(contraseña , salt);
  return hash
}

async function usuarioCreado(req,res){
  
  let hash= await encritador(req.body.contrasena);  
  
  let usuario={
    Usu_Nombre:req.body.usuario,
    Usu_Email:req.body.email,
    Usu_Contrasena:hash,
    Usu_tipo:req.body.Kind_of_user
  }
  req.session.usuario={usuario:[usuario.Usu_Nombre,usuario.Usu_tipo]}
  //res.redirect('/usuario/:nombre/Configuracion')
  
  await pool.query('INSERT INTO usuarios set ?',[usuario],(err,result,fields)=>{
    
    if(err) {
      console.log('no se pudo guardar');
    }
    
    else {
      console.log('se guardo exitosamente');
    }
  })    
  
}








//Cerrar Sesion
function cerrarSesion(req,res){
  req.session.destroy((err) => {
    if(err){
      console.log(err)
    }else{
    res.redirect('/')
    }
  })  
}





async function artist(req,res){  
  req.session.nombre = req.params.nombre//meto el parametro nombre en la secion
  res.sendFile(miDire +'artist.html');
}


function formularioParaCompletardatos(req,res){

}

async function iniciarSesion(req,res){    
  let peticion=`SELECT Usu_Nombre,Usu_Contrasena,Usu_tipo `;
  peticion +=`FROM usuarios `;
  let datos = await(pool.query(peticion));

  let usuario= await datos.find(user=>req.body.nDeUsuario===user.Usu_Nombre);//busco entre los usuarios
    
  if(!usuario){
    return res.send('El usuario no existe');
  }    
    
  try{

    if(await bcrypt.compare(req.body.contraDeUsuario, usuario.Usu_Contrasena)){
      req.session.usuario={usuario:[usuario.Usu_Nombre,usuario.Usu_tipo]}
      res.redirect('/')           
      console.log(req.session)
    }else{
      res.send('Esa no es la contraseña');
    }
  }
  catch{
    console.log('hubo un error al intentar validar la Contraseña');
  }
}

function modificarUsuario(req,res){/**/
  res.sendFile(miDire +'configuracion.html');
}

function usuariomodificado(req,res){
  res.redirect(`/usuario/${req.session.usuario.usuario[0]}`)
}


function permisoDeUsuario(req,res,next){
  if(req.session.usuario){
    next()
  }else{
    res.redirect('/')
  } 
}

function perfil(){/**/

}

module.exports={
  crearUsuario,comparadorDeUsuarios,
  usuarioCreado,artist,
  modificarUsuario, 
  iniciarSesion, perfil,
  cerrarSesion,usuariomodificado,permisoDeUsuario
}
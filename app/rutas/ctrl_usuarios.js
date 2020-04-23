const path = require('path');
const miDire = path.join(__dirname, '/../../public/html/');
const pool = require('../basededatos/database.js');
const bcrypt= require('bcrypt');


function crearUsuario(req,res){
  res.sendFile(miDire +'resgistrarse.html');
}



async function usuarioCreado(req,res){
  
  try{
    
    const salt = await bcrypt.genSalt();
    const contra = await bcrypt.hash(req.body.contrasena , salt);
    
    let datos={
      Usu_Nombre:req.body.usuario,
      Usu_Email:req.body.email,
      Usu_Contrasena:contra,
      Usu_tipo:req.body.Kind_of_user
    }

    await pool.query('INSERT INTO usuarios set ?',[datos],(err,result,fields)=>{
      let respuesta;
      if(err){
        respuesta={
          status:'error',
          mensaje:'error al guardar'
        }
      }
      else {
        respuesta={
          status:'ok',
          mensaje:'se guardo exitosamente'
        }
      }    
      console.log(respuesta)
    });
  }
  catch{
    console.log('no se pudo hacer encriptar ni enviar los datos')
  }
  res.sendFile(miDire +'index.html');
}



async function iniciarSeccion(req,res){/**/
    
  let peticion=`SELECT Usu_Nombre,Usu_Contrasena `
  peticion +=`FROM usuarios `
  let datos = await(pool.query(peticion))
  res.json(datos)

    let usuario= await datos.find(user=>req.body.nDeUsuario===user.Usu_Nombre)
    
    if(!usuario){console.log('Usuario no encotrado')}

    try{
      if(await bcrypt.compare(req.body.contraDeUsuario,10, usuario.Usu_Contrasena)){
        res.send('lo has logrado')
      }else{
        res.send('contraseña incorrecta')
      }
    }
    catch{
      console.log('no se ha podido')
    }

    

    
    
}




















function cerrarSesion(req,res){//----------------------cerrar sescion
  req.session.destroy(()=>{
    res.clearCookie('Usuario')
  })
  console.log(req.session)
}






function modificarUsuario(){/**/

}
function perfil(){/**/

}
function cerrarSeccion(){/**/

}
function borrarUsuario(){/**/

}
function bloquear(){/**/
  
}





module.exports={
  crearUsuario,usuarioCreado,
  modificarUsuario, borrarUsuario,
  iniciarSeccion, perfil,
  cerrarSeccion, bloquear
}
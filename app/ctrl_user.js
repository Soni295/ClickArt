function crear(req,res){ 
  res.sendFile(miDire +'resgistrarse.html');
}
 
async function crear2(req,res){
    res.sendFile(miDire +'index.html');
    console.log(req.body)
  
    let datos={
      Usu_Nombre:req.body.usuario,
      Usu_Email:req.body.email,
      Usu_Contrasena:req.body.contrasena,
      Usu_tipo:req.body.Kind_of_user
    }
    await pool.query('INSERT INTO usuarios set ?',[datos]);
}
function modificiar(req,res){

}
function borrar(req,res){

}
//function bloquear(req,res){}


module.exports = { 
  crear,
  modificiar,
  borrar
}

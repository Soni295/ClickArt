const express     = require('express');
const controlador = require('./ctrl_rutas_get');
const estatico    = require('./ctrl_estaticos');
const usuario     = require('./ctrl_usuarios');
const dibujo      = require('./ctrl_dibujos');
const bcrypt      = require('bcrypt');

const enrutador =  express.Router();//El router va a manejar las rutas
const users=[]
enrutador
.get('/datos/Index', controlador.datosIndex)
.get('/datos/Usuarios', controlador.datosUsuarios)
.get('/datos/Dibujos', controlador.datosDibujos)
.get('/datos/Galerias', controlador.datosGalerias)

.get('/', controlador.index)

.post('/datos/Seccion',usuario.iniciarSeccion )

.post('/user', async (req,res)=>{//encripta la contraseña
  try{
    const salt = await bcrypt.genSalt()
    const hashedPassword= await bcrypt.hash(req.body.password , salt)
    const user ={name:req.body.name, password:hashedPassword}
    users.push(user)
    res.send('hellow')
  }
  catch{
    console.error(error)
  }
})

.post('/user/login', async (req,res)=>{//
  console.log(users)
  const user= users.find(user=> {return user.name === req.body.name})
  console.log(user)
  if(user === null){
    return res.status(400).send('usuario no encontrado')
  }
  try{
    if(await bcrypt.compare(req.body.password,user.password)){
      res.send('lo has logrado')
    }else{
      res.send('contraseña incorrecta')
    }
  }
  catch{
    res.status(500).send()
  }

})









.get('/resgistrarse', usuario.crearUsuario)
.post('/resgistrarse', usuario.usuarioCreado)

.get('/subida', dibujo.crearDibujo)
.post('/subida', dibujo.dibujoCreado)

.get('/usuario/:id', controlador.artist)
.get('/dibujo/:id', controlador.dibujo)

.get('/privacidad', estatico.privacidad)
.get('/politica_de_subida', estatico.politicaDeSubida)
.get('/terminos', estatico.terminos)

.get('*', estatico.noEncontrado)

module.exports = enrutador;





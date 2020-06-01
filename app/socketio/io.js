const pool = require('../basededatos/database');

module.exports = ( io ) => {
  io.on('connection', (socket)=>{
    console.log('Nuevo usuario conectado')
    chat(socket)
    nuevoMensaje(socket)
    usuarioDesconectado(socket)
  });
}


async function chat(socket){
  socket.on('chat', async({usuario,contacto}) => {

    const comentarios=[
      {
        usuario:'Ejemplo12',
        mensaje:'hola como estas'
      },
      {
        usuario:'Ejemplo12',
        mensaje:'todo bien?'
      },
      {
        usuario:'Juan',
        mensaje:'bien aca en casa y vos'
      },
      {
        usuario:'Ejemplo12',
        mensaje:'aca tranca palanca'
      },
      {
        usuario:'Juan',
        mensaje:'me parece bien que querias'
      },
      {
        usuario:'Ejemplo12',
        mensaje:'solo queria tomar unos mates'
      }
    ]
    const comentarios2=[
      {
        usuario:'Estaban',
        mensaje:'che te acordas de'
      },
      {
        usuario:'Ejemplo12',
        mensaje:'No la verdad no me acuerdo'
      },
      {
        usuario:'Estaban',
        mensaje:'si el dia que vos te comistes'
      },
      {
        usuario:'Estaban',
        mensaje:'la milaneza de mi hermana'
      },
      {
        usuario:'Ejemplo12',
        mensaje:'si si me acuerdo'
      },
      {
        usuario:'Ejemplo12',
        mensaje:'se enojo?'
      }
    ]
    
    let id= 1
    
    if(contacto === "Armando"){
      id= 1
    }
    else if(contacto === 'Ricardo'){
      id= 2
    }
    
    const peticion = `
      SELECT * FROM mensaje
      WHERE ID_Sala= ${id}
      ORDER by ID_Mensajes ASC
    `

    mensajes= await pool.query(peticion)
    socket.emit('mensajes', mensajes)
    
  })
}

async function nuevoMensaje(socket){
  socket.on('mensajeNuevo', async({usuario,contacto,mensaje}) => {

  console.log(usuario,contacto,mensaje)

  let id = 1
  if(contacto === 'Armando'){
    id = 1
  }
  else if(contacto == 'Ricardo' || contacto === 'Ejemplo12' ){
    id = 2
  }  
  const insercionsql = ` 
    INSERT INTO mensaje( Usu_Nombre, mensaje, ID_Sala) VALUES(
    '${usuario}',
    '${mensaje}',
    '${id}')`
    console.log(insercionsql)
    await pool.query(insercionsql)

    socket.emit('actualizarMensaje', mensaje)

  }
  )
}








function usuarioDesconectado(socket){
  socket.on('disconnect',()=>{
    console.log('el usuario se desconecto')
  })
}




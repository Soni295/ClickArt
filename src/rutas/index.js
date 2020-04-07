const rutas = (app,miDire)=>{
/*
  let valor =0;
 
  app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    if (valor) next();
    else res.send('hello from A!')
  }, function (req, res) {
    res.send('Hello from B!');
  });//con esto puedo verificar para donde ennviarlo
  */

  app.get('/',(req,res)=>{
    res.sendFile(miDire +'index.html')
  });
  app.get('/subida',(req,res)=>{// Aca tengo q modificar para los permisos
    res.sendFile(miDire +'subida.html')
  });
  app.get('/privacidad',(req,res)=>{
    res.sendFile(miDire +'privacidad.html')
  });
  app.get('/politica_de_subida',(req,res)=>{
    res.sendFile(miDire +'politica_de_subida.html')
  });
  app.get('/resgistrarse',(req,res)=>{
    res.sendFile(miDire +'resgistrarse.html')
  });
  app.get('/terminos',(req,res)=>{
    res.sendFile(miDire +'terminos.html')
  });
  app.get('/usuario',(req,res)=>{//Trabajar la verificacion
    res.sendFile(miDire +'artist.html')
  });
  app.get('/dibujo01',(req,res)=>{
    res.sendFile(miDire +'no_encontrado');
  });
  app.get('*',(req,res)=>{
    res.status(404).sendFile(miDire +'no_encontrado');
  });








}

module.exports = rutas;
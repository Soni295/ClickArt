const express = require('express');
const app = express();
const server = require('http').Server(app);
const folder= __dirname + `/public/html/` ; //me da la direccion de este archivos


app.use('*',express.static('public'))

app.get('/',function(req,res){
  res.render(folder +'index.html');
});

server.listen(3000, ()=>{                //selecciono el puerto 
  console.log('Puerto 3000 activo');     //y que si fuciona me responda por consola
});


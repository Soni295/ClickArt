/*function hola(err,callback){
  if (err){
    console.log('hay error');
  }else{
    console.log('No hay error');
  }
  callback();
}
function buenosdias(){
  console.log('todo esta bien')
}

hola(1,buenosdias);

function hola(err,name,callback){
  if (err){
    console.log('hay error');
  }else{
    console.log('No hay error');
  }
  callback(name);
}
hola(0,'hernesto',(name) =>{
  console.log(`hola ${name}`)
});

*/


function Suma1(a,b){
  return a + b
}

let Suma2 = (a,b) => a + b + 4

//console.log(Suma1(4,3))

console.log(Suma2(4,3))
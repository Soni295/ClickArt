const readline = require('readline')
const fs = require('fs')

const f = n => `  --px${n}: ${n * 0.0625};\n`
const writeStream = fs.createWriteStream('sizes.css')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const generatorCss = (count, stream) => {
  stream.write(':root {\n')
  for(let i = 1; i <= count; i++) stream.write(f(i))
  stream.write('}')
  stream.end()
}

rl.question('Cuantas unidades de pixeles queres generar\n', answer => {
  generatorCss(parseInt(answer), writeStream)
  console.log('Se ha creado exitosamente')

  rl.close();
})

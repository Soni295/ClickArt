const bcrypt = require('bcrypt');
const saltRounds = 10;

const password = 'hola'


console.log(
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err) console.log(err)
    console.log(hash)
    return hash
  })
)


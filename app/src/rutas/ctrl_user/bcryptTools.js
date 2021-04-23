const bcrypt = require('bcrypt')
const saltRounds = 10

const encript = async password => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)
  return hash
}


const checkPassword = async(password, passwordDB) =>
  bcrypt.compare(password, passwordDB)


module.exports = {
  encript,
  checkPassword
}

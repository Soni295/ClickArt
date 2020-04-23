const session = require('express-session')
const FileStore = require('session-file-store')(session)

let sesion= session({
  store: new FileStore,
  secret: '123456789',
  resave: false,
  saveUninitialized: true,
  name: 'Usuario'
})

module.exports={sesion};
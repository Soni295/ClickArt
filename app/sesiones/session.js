const session = require('express-session')
const FileStore = require('session-file-store')(session)

let sesion= session({
  name: 'Usuario',
  secret: '123456789',
  resave: false,
  saveUninitialized: true,
  store: new FileStore({autoReconnect:true})
})

module.exports={sesion};
const route = require('express').Router()

route
  .post("/SignUp", require('./signUp'))
  .post("/LogIn", require('./LogIn'))

module.exports = route

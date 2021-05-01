const { encript }= require('../bcryptTools')
const { USER } = require('../../tables')
const pool = require('../../../basededatos/database')

const SignUp = async(req, res) => {
  const {user, email, name, password} = req.body

  const hash = await encript(password)

  const insert = {
    [USER.USER]: user,
    [USER.NAME]: name,
    [USER.EMAIL]: email,
    [USER.PASSWORD]: hash,
    [USER.TYPEOFUSER]: 1
  }
  const insertionSignUp = `INSERT INTO ${USER.TABLE} SET ?`
  const deleteRequest = `DELETE FROM ${USER.TABLE} WHERE ${USER.USER} = ? `

  pool.query(insertionSignUp, insert)
    .then(() => res.status(201).json({msg: 'account created successfully'}))
    .then(() => pool.query(deleteRequest, [user])) // borra este para los test
    .catch(err => {
      console.log(err)
      res.status(404).json({msg: 'Error with the Database'})
    })
}

const CheckUserExist = async(req, res, next) => {

  const {user, email} = req.body

  const search = `
    SELECT ${USER.USER}, ${USER.EMAIL} from ${USER.TABLE}
    where ${USER.USER} = ? or ${USER.EMAIL} = ?`

  const userDb = await pool.query(search, [user, email])
    .then(acount => acount[0] ? acount[0] : 'don\'t exist')
    .catch(e => console.log(e))

  if( userDb !== 'don\'t exist') {
    return res.status(418).json({
      msg: 'this username or email exist, try another'
    })
  }
  next()
}

module.exports = [CheckUserExist, SignUp]

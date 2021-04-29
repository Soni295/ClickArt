const { USER } = require('../../tables')
const pool = require('../../../basededatos/database')
const { checkPassword } = require('../bcryptTools')

const LogIn = async(req, res) => {
  const { user, password } = req.body

  const request = `
  SELECT ${USER.USER}, ${USER.PASSWORD}
  FROM ${USER.TABLE} WHERE ${USER.USER} = ?`

  const passwordDB = await pool.query(request, [user])
    .then( result => result[0] ? result[0][USER.PASSWORD]: null)

  if(passwordDB === null)
    return res.status(404).json({msg: 'Don\'t exist this User', state: 'fail'})

  if(checkPassword(password,passwordDB))
    return res.status(200).json({user, state: 'ok'})

  return res.status(200).json({msg: 'wrong password', state: 'fail'})
}

module.exports = LogIn

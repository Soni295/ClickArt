const { encript }= require('../bcryptTools')
const { USER } = require('../../tables')

const SignUp = async(req, res) => {
  const hash = await encript(req.body.password);

  const insert = {
    [USER.USER]: req.body.user,
    [USER.NAME]: req.body.name,
    [USER.EMAIL]: req.body.email,
    [USER.PASSWORD]: hash,
    [USER.TYPEOFUSER]: 1
  }

  const insertionSignUp = `INSERT INTO ${USER.TABLE} SET ?`

  return res.json({msg: 'Todo Bien'})
  /*
  await pool.query(insertionSignUp, insert, err => {
    if (err) {
      console.log(err)
      return res.json({ msg: "Error" });
    } else {
      const datosDeLaSesion = [req.body.usuario, req.body.tipo];
      return res.status(200).json({
        msg: "Success", usuario: [datosDeLaSesion],
      })
    }
  })
  */

}

module.exports = SignUp

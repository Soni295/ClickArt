const request = require('supertest')

const app = require('../server')

describe('Post /User/Sign Up for SignUp', () => {
  it('if account pass all check return status 201 and a msg \'account created successfully\' ', done => {
    request(app)
      .post('/User/SignUp')
      .send({
        user: 'example200',
        name: 'Juanma',
        email:'Juanma@hotmail.com',
        password: 'password'
      })
      .expect('Content-Type', /json/)
      .expect(201, {msg: 'account created successfully'})
      .end((err) => {
        if (err) return done(err);
        return done();
      })
  })
  it(`the user :"Ejemplo12" exist in DB so it\' should return status 418 and a
    msg: 'this username or email exist, try another'`, done => {
    request(app)
      .post('/User/SignUp')
      .send({
        user: 'Ejemplo12',
        name: 'Juanma',
        email:'Juanma@hotmail.com',
        password: 'password'
      })
      .expect('Content-Type', /json/)
      .expect(418, {msg: 'this username or email exist, try another'})
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
})

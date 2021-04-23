const request = require('supertest')

const app = require('../server')

describe('Post /User/LogIn for login', () => {
  it('response with user and status 200', done => {
    request(app)
      .post('/User/LogIn')
      .send({user: 'Ejemplo12', password: '123456789'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
  it('response with msg "Don\'t exist this User" and status 404', done => {
    request(app)
      .post('/User/LogIn')
      .send({user: 'Mr. NoBody', password: 'mmmmmmmm'})
      .expect('Content-Type', /json/)
      .expect(404, {msg: 'Don\'t exist this User'})
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
})

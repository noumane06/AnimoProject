const request = require('supertest');
//const app = require('../app.js'); // the express server

var data = {
    email : 'test@gmail.com',
    password : 'azerty'
};
let token ;
beforeAll((done) => {
    request('http://localhost:9000')
        .post('/users/signin')
        .send(data).end((err, response) => {
        //  console.log(response)
        token = response.body.token    // saving the token
        done();
    })
});

describe('Authentification endpoint', function() {
    it('should signin the user', async function(done) {
      request('http://localhost:9000')
        .get('/users/checkCoockie')
        .set("Cookie",[`auth=${token}`])
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });




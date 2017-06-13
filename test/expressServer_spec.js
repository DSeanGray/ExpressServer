var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../expressServer');

var expect = chai.expect;

chai.use(chaiHttp);

describe("App", function() {
  describe('/set?somekey=somevalue', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .post('/set?somekey=somevalue')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});

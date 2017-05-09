const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
let should = chai.should();
chai.use(chaiHttp);


describe('Blog API', function() {

  beforeEach(function(done) {

  });

  afterEach(function(done) {

  });


  describe('GET - all blog data', function() {
    it('should return all the blog-post data', function() {
      chai.request(server)
        .get('/api/blog')
        .end((err, result) => {
          result.should.have.status(200);
          done();
        });
    });

  });



});

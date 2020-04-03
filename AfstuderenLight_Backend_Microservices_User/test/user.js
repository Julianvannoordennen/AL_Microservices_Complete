// Configure test environment
process.env.NODE_ENV = 'test';

// Configure test frameworks
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

// Temp data
let createdUser = {};

// Tests
describe('Users', () => {
  it('should POST a single user', (done) => {
    chai.request(server)
        .post('/api/users')
        .send({
          firstName: 'firstName',
          lastName: 'lastName'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('firstName').which.is.a('string');
          res.body.should.have.property('lastName').which.is.a('string');
          res.body.firstName.should.be.equal('firstName');
          res.body.lastName.should.be.equal('lastName');
          createdUser = res.body;
          done();
        });
  });

  it('should GET all users', (done) => {
    chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          const lastUser = res.body[res.body.length - 1];
          lastUser.should.have.property('_id').which.is.a('string');
          lastUser.should.have.property('firstName').which.is.a('string');
          lastUser.should.have.property('lastName').which.is.a('string');
          lastUser._id.should.be.equal(createdUser._id);
          lastUser.firstName.should.be.equal(createdUser.firstName);
          lastUser.lastName.should.be.equal(createdUser.lastName);
          done();
        });
  });

  it('should GET a single user', (done) => {
    chai.request(server)
        .get('/api/users/' + createdUser._id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('firstName').which.is.a('string');
          res.body.should.have.property('lastName').which.is.a('string');
          res.body._id.should.be.equal(createdUser._id);
          res.body.firstName.should.be.equal(createdUser.firstName);
          res.body.lastName.should.be.equal(createdUser.lastName);
          done();
        });
  });

  it('should PUT a single user', (done) => {
    chai.request(server)
        .put('/api/users/' + createdUser._id)
        .send({
            firstName: 'firstName2',
            lastName: 'lastName2'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('firstName').which.is.a('string');
          res.body.should.have.property('lastName').which.is.a('string');
          res.body._id.should.be.equal(createdUser._id);
          res.body.firstName.should.be.equal('firstName2');
          res.body.lastName.should.be.equal('lastName2');
          createdUser = res.body;
          done();
        });
  });

  it('should DELETE a single user', (done) => {
    chai.request(server)
        .delete('/api/users/' + createdUser._id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('firstName').which.is.a('string');
          res.body.should.have.property('lastName').which.is.a('string');
          res.body._id.should.be.equal(createdUser._id);
          res.body.firstName.should.be.equal(createdUser.firstName);
          res.body.lastName.should.be.equal(createdUser.lastName);
          done();
        });
  });
});

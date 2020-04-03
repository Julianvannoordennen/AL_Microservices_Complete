// Configure test environment
process.env.NODE_ENV = 'test';

// Configure test frameworks
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

// Temp data
let createdReview = {};

// Tests
describe('Reviews', () => {
  it('should POST a single review', (done) => {
    chai.request(server)
        .post('/api/reviews')
        .send({
          userID: '5e84a0ad6c6e4137c87ed05d',
          productID: '5e84a0ad6c6e4137c87ed05d',
          description: 'description',
          rating: 5,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('userID').which.is.a('string');
          res.body.should.have.property('productID').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('rating').which.is.a('number');
          res.body.userID.should.be.equal('5e84a0ad6c6e4137c87ed05d');
          res.body.productID.should.be.equal('5e84a0ad6c6e4137c87ed05d');
          res.body.description.should.be.equal('description');
          res.body.rating.should.be.equal(5);
          createdReview = res.body;
          done();
        });
  });

  it('should GET all reviews', (done) => {
    chai.request(server)
        .get('/api/reviews')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          const lastReview = res.body[res.body.length - 1];
          lastReview.should.have.property('_id').which.is.a('string');
          lastReview.should.have.property('userID').which.is.a('string');
          lastReview.should.have.property('productID').which.is.a('string');
          lastReview.should.have.property('description').which.is.a('string');
          lastReview.should.have.property('rating').which.is.a('number');
          lastReview._id.should.be.equal(createdReview._id);
          lastReview.userID.should.be.equal(createdReview.userID);
          lastReview.productID.should.be.equal(createdReview.productID);
          lastReview.description.should.be.equal(createdReview.description);
          lastReview.rating.should.be.equal(createdReview.rating);
          done();
        });
  });

  it('should GET a single review', (done) => {
    chai.request(server)
        .get('/api/reviews/' + createdReview._id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('userID').which.is.a('string');
          res.body.should.have.property('productID').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('rating').which.is.a('number');
          res.body._id.should.be.equal(createdReview._id);
          res.body.userID.should.be.equal(createdReview.userID);
          res.body.productID.should.be.equal(createdReview.productID);
          res.body.description.should.be.equal(createdReview.description);
          res.body.rating.should.be.equal(createdReview.rating);
          done();
        });
  });

  it('should PUT a single review', (done) => {
    chai.request(server)
        .put('/api/reviews/' + createdReview._id)
        .send({
            description: 'description2',
            rating: 0
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('userID').which.is.a('string');
          res.body.should.have.property('productID').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('rating').which.is.a('number');
          res.body._id.should.be.equal(createdReview._id);
          res.body.userID.should.be.equal('5e84a0ad6c6e4137c87ed05d');
          res.body.productID.should.be.equal('5e84a0ad6c6e4137c87ed05d');
          res.body.description.should.be.equal('description2');
          res.body.rating.should.be.equal(0);
          createdReview = res.body;
          done();
        });
  });

  it('should DELETE a single review', (done) => {
    chai.request(server)
        .delete('/api/reviews/' + createdReview._id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('userID').which.is.a('string');
          res.body.should.have.property('productID').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('rating').which.is.a('number');
          res.body._id.should.be.equal(createdReview._id);
          res.body.userID.should.be.equal(createdReview.userID);
          res.body.productID.should.be.equal(createdReview.productID);
          res.body.description.should.be.equal(createdReview.description);
          res.body.rating.should.be.equal(createdReview.rating);
          done();
        });
  });
});

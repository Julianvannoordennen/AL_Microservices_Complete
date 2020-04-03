// Configure test environment
process.env.NODE_ENV = 'test';

// Configure test frameworks
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

// Temp data
let createdProduct = {};

// Tests
describe('Products', () => {
  it('should POST a single product', (done) => {
    chai.request(server)
        .post('/api/products')
        .send({
          name: 'name',
          description: 'description',
          price: 25,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('name').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('price').which.is.a('number');
          res.body.name.should.be.equal('name');
          res.body.description.should.be.equal('description');
          res.body.price.should.be.equal(25);
          createdProduct = res.body;
          done();
        });
  });

  it('should GET all products', (done) => {
    chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          const lastProduct = res.body[res.body.length - 1];
          lastProduct.should.have.property('_id').which.is.a('string');
          lastProduct.should.have.property('name').which.is.a('string');
          lastProduct.should.have.property('description').which.is.a('string');
          lastProduct.should.have.property('price').which.is.a('number');
          lastProduct._id.should.be.equal(createdProduct._id);
          lastProduct.name.should.be.equal(createdProduct.name);
          lastProduct.description.should.be.equal(createdProduct.description);
          lastProduct.price.should.be.equal(createdProduct.price);
          done();
        });
  });

  it('should GET a single product', (done) => {
    chai.request(server)
        .get('/api/products/' + createdProduct._id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('name').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('price').which.is.a('number');
          res.body._id.should.be.equal(createdProduct._id);
          res.body.name.should.be.equal(createdProduct.name);
          res.body.description.should.be.equal(createdProduct.description);
          res.body.price.should.be.equal(createdProduct.price);
          done();
        });
  });

  it('should PUT a single product', (done) => {
    chai.request(server)
        .put('/api/products/' + createdProduct._id)
        .send({
          name: 'name2',
          description: 'description2',
          price: 50,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('name').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('price').which.is.a('number');
          res.body._id.should.be.equal(createdProduct._id);
          res.body.name.should.be.equal('name2');
          res.body.description.should.be.equal('description2');
          res.body.price.should.be.equal(50);
          createdProduct = res.body;
          done();
        });
  });

  it('should DELETE a single product', (done) => {
    chai.request(server)
        .delete('/api/products/' + createdProduct._id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id').which.is.a('string');
          res.body.should.have.property('name').which.is.a('string');
          res.body.should.have.property('description').which.is.a('string');
          res.body.should.have.property('price').which.is.a('number');
          res.body._id.should.be.equal(createdProduct._id);
          res.body.name.should.be.equal(createdProduct.name);
          res.body.description.should.be.equal(createdProduct.description);
          res.body.price.should.be.equal(createdProduct.price);
          done();
        });
  });
});

/* Product Controller */

/* Imports */
const Product = require('../models/Product');
const ApiError = require('../models/ApiError');

module.exports = {

  /* Functionality */

  getAllProducts(req, res, next) {
    Product.find()
        .then((products) => {
          if (products === null) {
            res.status(404).json(new ApiError('There are no products.', 404)).end();
          } else {
            res.status(200).json(products).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  getProduct(req, res, next) {
    const productID = req.params.productid;

    Product.findById(productID)
        .then((product) => {
          if (product === null) {
            res.status(404).json(new ApiError('This product does not exist', 404)).end();
          } else {
            res.status(200).json(product).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  postProduct(req, res, next) {
    const body = req.body;
    console.log(body);
    Product.create(body)
        .then((product) => {
          res.status(200).json(product).end();
        }).catch((error) => {
          next(new ApiError(error.message, 400));
          console.log(error);
        });
  },

  putProduct(req, res, next) {
    const productID = req.params.productid;
    const newProduct = req.body;

    Product.findByIdAndUpdate(productID, {name: newProduct.name, description: newProduct.description, price: newProduct.price}, {new: true})
        .then((product) => {
          if (product === null) {
            res.status(404).json(new ApiError('There is no product for this user with this id.', 404)).end();
          } else {
            res.status(200).json(product).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  deleteProduct(req, res, next) {
    const productID = req.params.productid;
    Product.findByIdAndDelete(productID)
        .then((product) => {
          if (product === null) {
            res.status(404).json(new ApiError('There is no product with this id.', 404)).end();
          } else {
            res.status(200).json(product).end();
          }
        }).catch(next);
  },

// End
};

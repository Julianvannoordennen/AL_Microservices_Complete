/* Product Routes */

/* Imports */
const routes = require('express').Router();
const productController = require('../controllers/productController');

/* Routes */
routes.get('/products', productController.getAllProducts);
routes.get('/products/:productid/', productController.getProduct);
routes.post('/products/', productController.postProduct);
routes.put('/products/:productid', productController.putProduct);
routes.delete('/products/:productid', productController.deleteProduct);

/* Export */
module.exports = routes;

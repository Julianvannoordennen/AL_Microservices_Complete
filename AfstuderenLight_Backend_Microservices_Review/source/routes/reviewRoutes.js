/* Review Routes */

/* Imports */
const routes = require('express').Router();
const reviewController = require('../controllers/reviewController');

/* Routes */
routes.get('/reviews', reviewController.getAllReviews);
routes.get('/reviews/:reviewid/', reviewController.getReview);
routes.post('/reviews/', reviewController.postReview);
routes.put('/reviews/:reviewid', reviewController.putReview);
routes.delete('/reviews/:reviewid', reviewController.deleteReview);

/* Export */
module.exports = routes;

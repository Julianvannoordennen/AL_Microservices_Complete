/* Review Controller */

/* Imports */
const Review = require('../models/Review');
const ApiError = require('../models/ApiError');

module.exports = {

  /* Functionality */

  getAllReviews(req, res, next) {
    Review.find()
        .then((reviews) => {
          if (reviews === null) {
            res.status(404).json(new ApiError('There are no reviews.', 404)).end();
          } else {
            res.status(200).json(reviews).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  getReview(req, res, next) {
    const reviewID = req.params.reviewid;

    Review.findById(reviewID)
        .then((review) => {
          if (review === null) {
            res.status(404).json(new ApiError('There is no review with this id.', 404)).end();
          } else {
            res.status(200).json(review).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  postReview(req, res, next) {
    const body = req.body;
    console.log(body);
    Review.create(body)
        .then((review) => {
          res.status(200).json(review).end();
          if (review === null) {
            res.status(404).json(new ApiError('There is no review with this id.', 404)).end();
          } else {
            res.status(200).json(review).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  putReview(req, res, next) {
    const reviewID = req.params.reviewid;
    const newReview = req.body;
    Review.findByIdAndUpdate(reviewID, {description: newReview.description, rating: newReview.rating}, {new: true})
        .then((review) => {
          if (review === null) {
            res.status(404).json(new ApiError('There is no review with this id.', 404)).end();
          } else {
            res.status(200).json(review).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  deleteReview(req, res, next) {
    const reviewID = req.params.reviewid;
    Review.findByIdAndDelete(reviewID)
        .then((review) => {
          if (review === null) {
            res.status(404).json(new ApiError('There is no review with this id.', 404)).end();
          } else {
            res.status(200).json(review).end();
          }
        }).catch(next);
  },

// End
};

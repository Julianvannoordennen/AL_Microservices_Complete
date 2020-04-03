/* Imports & Settings */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Attributes */
const ReviewSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'users', // ,
    // required: [true, "userID must be an _id and is required"]
  },

  productID: {
    type: Schema.Types.ObjectId,
    ref: 'products', // ,
    // required: [true, "productID must be an _id and is required"]
  },

  description: {
    type: String,
    required: [true, 'description must be a string and is required'],
  },

  rating: {
    type: Number,
    minimum: 0,
    maximum: 5,
    required: [true, 'rating must be an integer between [0, 5] and is required'],
  },
});

/* Export */
const ReviewModel = mongoose.model('reviews', ReviewSchema);
module.exports = ReviewModel;

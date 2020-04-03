/* Imports & Settings */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Attributes */
const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required.'],
  },
  description: {
    type: String,
    required: [true, 'description is required.'],
  },
  price: {
    type: Number,
    required: [true, 'price is required.'],
  }, // ,
  // reviews: {
  //   type: Schema.Types.ObjectId,
  //   ref: "reviews"
  // },
});

/* Export */
const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;

/* Imports & Settings */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Attributes */
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'name is required.'],
  },
  lastName: {
    type: String,
    required: [true, 'description is required.'],
  },

});

/* Export */
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;

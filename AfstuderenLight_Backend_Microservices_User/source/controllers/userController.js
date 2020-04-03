/* User Controller */

/* Imports */
const User = require('../models/User');
const ApiError = require('../models/ApiError');

module.exports = {

  /* Functionality */

  getAllUsers(req, res, next) {
    User.find()
        .then((users) => {
          if (users === null) {
            res.status(404).json(new ApiError('There are no users.', 404)).end();
          } else {
            res.status(200).json(users).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  getUser(req, res, next) {
    const userID = req.params.userid;

    User.findById(userID)
        .then((user) => {
          if (user === null) {
            res.status(404).json(new ApiError('There is no user with this id.', 404)).end();
          } else {
            res.status(200).json(user).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  postUser(req, res, next) {
    const body = req.body;
    User.create(body)
        .then((user) => {
          if (user === null) {
            res.status(404).json(new ApiError('There is no user with this id.', 404)).end();
          } else {
            res.status(200).json(user).end();
          }
        }).catch((error) => next(new ApiError(error.message, 400)));
  },

  putUser(req, res, next) {
    const userID = req.params.userid;
    const newUser = req.body;

    User.findByIdAndUpdate(userID, {firstName: newUser.firstName, lastName: newUser.lastName}, {new: true})
        .then((user) => {
          if (user === null) {
            res.status(404).json(new ApiError('There is no user with this id.', 404)).end();
          } else {
            res.status(200).json(user).end();
          }
        }).catch((error) => {
          next(new ApiError(error.message, 400));
          console.log(error);
        } );
  },

  deleteUser(req, res, next) {
    const userID = req.params.userid;
    User.findByIdAndDelete(userID)
        .then((user) => {
          if (user === null) {
            res.status(404).json(new ApiError('There is no user with this id.', 404)).end();
          } else {
            res.status(200).json(user).end();
          }
        }).catch(next);
  },

// End
};

/* Products */
// Get all products
module.exports.getProducts = function() {
  return new Promise((fullfil, reject) => {
    require('axios').get(process.env.VUE_APP_AL_PRODUCTS_URL)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Create a new product
module.exports.postProduct = function(product) {
  return new Promise((fullfil, reject) => {
    require('axios').post(process.env.VUE_APP_AL_PRODUCTS_URL, product)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Update a product
module.exports.updateProduct = function(_id, product) {
  return new Promise((fullfil, reject) => {
    require('axios').put(`${process.env.VUE_APP_AL_PRODUCTS_URL}/${_id}`, product)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Delete a product
module.exports.deleteProduct = function(_id) {
  return new Promise((fullfil, reject) => {
    require('axios').delete(`${process.env.VUE_APP_AL_PRODUCTS_URL}/${_id}`)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

/* Users */
// Get all users
module.exports.getUsers = function() {
  return new Promise((fullfil, reject) => {
    require('axios').get(process.env.VUE_APP_AL_USERS_URL)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Create a new user
module.exports.postUser = function(user) {
  return new Promise((fullfil, reject) => {
    require('axios').post(process.env.VUE_APP_AL_USERS_URL, user)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Update a user
module.exports.updateUser = function(_id, user) {
  return new Promise((fullfil, reject) => {
    require('axios').put(`${process.env.VUE_APP_AL_USERS_URL}/${_id}`, user)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Delete a user
module.exports.deleteUser = function(_id) {
  return new Promise((fullfil, reject) => {
    require('axios').delete(`${process.env.VUE_APP_AL_USERS_URL}/${_id}`)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

/* Reviews */
// Get all reviews
module.exports.getReviews = function() {
  return new Promise((fullfil, reject) => {
    require('axios').get(process.env.VUE_APP_AL_REVIEWS_URL)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Create a new review
module.exports.postReview = function(review) {
  return new Promise((fullfil, reject) => {
    require('axios').post(process.env.VUE_APP_AL_REVIEWS_URL, review)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Update a review
module.exports.updateReview = function(_id, review) {
  return new Promise((fullfil, reject) => {
    require('axios').put(`${process.env.VUE_APP_AL_REVIEWS_URL}/${_id}`, review)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

// Delete a review
module.exports.deleteReview = function(_id) {
  return new Promise((fullfil, reject) => {
    require('axios').delete(`${process.env.VUE_APP_AL_REVIEWS_URL}/${_id}`)
        .then((result) => {
          fullfil(result.data);
        }).catch((error) => reject(error));
  });
};

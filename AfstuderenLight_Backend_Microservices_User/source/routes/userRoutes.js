/* User Routes */

/* Imports */
const routes = require('express').Router();
const userController = require('../controllers/userController');

/* Routes */
routes.get('/users', userController.getAllUsers);
routes.get('/users/:userid/', userController.getUser);
routes.post('/users/', userController.postUser);
routes.put('/users/:userid', userController.putUser);
routes.delete('/users/:userid', userController.deleteUser);

/* Export */
module.exports = routes;

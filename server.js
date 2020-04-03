/* Server File */

/* Imports */
// plugins
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// File import
const ApiError = require('./source/models/ApiError');
const config = require('./config.js');

// Routes
const productRoutes = require('./source/routes/productRoutes');
const userRoutes = require('./source/routes/userRoutes');
const reviewRoutes = require('./source/routes/reviewRoutes');

/* Database */
// If NODE_ENV is testcloud or production, use the cloud database
mongoose.connect(config.cloud_db_url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
mongoose.connection
    .once('open', () => console.log('Database is running in the cloud'))
    .on('error', (error) => console.warn('Warning', error));

/* App setup */
const app = express();

/* Routes */
// Test
app.use('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Regular routes
app.use('/api', productRoutes);
app.use('/api', reviewRoutes);
app.use('/api', userRoutes);

// Non-existent endpoint
app.use('*', function(req, res, next) {
  const error = new ApiError('This endpoint does not exist.', 404);
  next(error);
});

// Catch-all error endpoint
app.use((err, req, res, next) => {
  res.status(err.code || 404).json(err).send();
});

/* Server */

// Set port
const port = process.env.PORT || config.port;

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('Server is running on port: ' + port);
  });
}

/* Export */
module.exports = app;

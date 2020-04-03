const config = {
  cloud_db_url: 'mongodb+srv://thomasthetrain:' + process.env.CLOUDDBPASSWORD + '@cluster1-x7sya.azure.mongodb.net/MonoliticDatabase?retryWrites=true&w=majority',
  cloud_db_test_url: 'mongodb+srv://thomasthetrain:' + process.env.CLOUDDBPASSWORD + '@cluster1-x7sya.azure.mongodb.net/TestMonoliticDatabase?retryWrites=true&w=majority',
  port: 3000,
  secretkey: process.env.SECRETKEY || 'SomeVerySecretKey_123456789',
};
module.exports = config;

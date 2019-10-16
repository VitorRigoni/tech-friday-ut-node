const config = require('config');

module.exports = {
  port: config.get('port'),
  connectionString: config.get('connectionString'),
  database: config.get('database'),
  mongoClientDefaultOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
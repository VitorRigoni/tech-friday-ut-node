const mongo = require('mongodb').MongoClient;
const config = require('../../config/config');

const connect = () =>
  mongo.connect(config.connectionString, config.mongoClientDefaultOptions)
    .then(x => x.db(config.database));

const getAllCustomers = () =>
  connect()
    .then(db => db.collection('customers').find().toArray());

module.exports = {
  getAllCustomers
};

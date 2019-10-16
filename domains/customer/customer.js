var repository = require('./repository');
var express = require('express');
var router = express.Router();

const getAllCustomers = () =>
  repository.getAllCustomers()
    .then(x => x.map(({ firstName, lastName }) => ({
      firstName,
      lastName
    })));

router.get('/', (_, res) => getAllCustomers().then(x => res.json(x)));

module.exports = {
  getAllCustomers,
  router
};

const express = require('express');
const config = require('./config/config');
const { customer } = require('./domains/customer');
const app = express();

const port = config.port || 3000;

app.get('/', (_, res) => res.send('Hello!'));
app.use('/customers', customer);

app.listen(port, () => console.log(`Listening on port ${port}`));
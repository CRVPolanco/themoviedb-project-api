const express = require('express');
const usersApi = require('./routes/usersApi');

const api = (app) => {

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/users', usersApi);
}

module.exports = { api }

const express = require('express');
const usersApi = express.Router();
const { User } = require('../../services/users.service');

const user = new User();

usersApi.get('/:email', async (req, res) => {
  const { email } = req.params;
  const rta = await user.existUser(email);

  res.status(200).json(rta);
})

usersApi.post('/', async (req, res) => {
  const body = req.body;
  const { email, password } = body;
  const rta = await user.getUnique(email, password);

  res.status(200).json(rta);
});

usersApi.post('/create', async (req, res) => {
  const body = req.body;
  const rta = await user.createUser(body);

  res.status(200).json(rta);
});

usersApi.post('/add/favorite', async (req, res) => {
  const body = req.body;
  const { id, movie } = body;
  const rta = await user.addFavorite(id, movie);

  res.status(201).json(rta);
});

usersApi.post('/remove/favorite', async (req, res) => {
  const body = req.body;
  const { id, movie } = body;
  const rta = await user.removeFavorite(id, movie);

  res.status(201).json(rta);
})

module.exports = usersApi;

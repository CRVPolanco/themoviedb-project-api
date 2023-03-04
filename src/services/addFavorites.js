import axios from 'axios';
import { LOCAL_DB } from './api';

export const addFavorites = async (id, movie) =>
  await axios.post(`${LOCAL_DB}/add/favorite`, {
    id: id,
    movie: movie
  })
    .then(r => r)
    .catch(e => e);

export const removeFavorites = async (id, movie) =>
  await axios.post(`${LOCAL_DB}/remove/favorite`, {
    id: id,
    movie: movie
  })
  .then(r => r)
  .catch(e => e);

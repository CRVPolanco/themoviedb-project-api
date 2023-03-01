import axios from 'axios';
import { LOCAL_DB } from './api';

export const addFavorites = async (userId, movie) =>
  await axios.post(`${LOCAL_DB}/add/movie/`, {
    userId: userId,
    movie: movie,
  })
    .then(r => r)
    .catch(e => e);

export const removeFavorites = async (userId, movie) =>
  await axios.post(`${LOCAL_DB}/remove/movie/`, {
    userId: userId,
    movie: movie,
  })
  .then(r => r)
  .catch(e => e);

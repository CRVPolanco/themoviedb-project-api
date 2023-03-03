import axios from 'axios';
import { API, API_KEY } from './api';

export const getMoviesFromCategory = async (categoryName) =>
  await axios.get(`${API}discover/movie?with_genres=${categoryName}&${API_KEY}`)
    .then(m => m)
    .catch(e => e);

export const getMoviesFromSearch = async (word) =>
  await axios.get(`${API}search/movie?query=${word}&${API_KEY}`)
    .then(m => m)
    .catch(e => e);


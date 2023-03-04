import axios from 'axios';
import { API, API_KEY } from './api';

const api = `${API}trending/movie/`;

export const getMovies = async(timewindow) =>
  await axios(`${api}${timewindow}?${API_KEY}`)
    .then(r => r.data)
    .catch(e => e.message);

export const getUniqueMovie = async(id) =>
  await axios.get(`${API}movie/${id}?${API_KEY}`)
    .then(r => r.data)
    .catch(e => e);

export const getSimilarMovies = async(id) =>
  await axios.get(`${API}movie/${id}/similar?${API_KEY}`)
    .then(r => r.data)
    .catch(e => e);

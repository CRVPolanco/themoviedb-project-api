import axios from 'axios';
import { API, API_KEY } from './api';

const api = `${API}trending/movie/`;

export const getMovies = async(timewindow) =>
  await axios(`${api}${timewindow}?${API_KEY}`)
    .then(r => r.data)
    .catch(e => e.message);

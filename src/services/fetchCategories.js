import axios from 'axios';
import { API_KEY, API } from './api';

export const getCategories = async() => await
  axios(`${API}genre/movie/list?${API_KEY}`)
    .then(r => r.data)
    .catch(e => e);

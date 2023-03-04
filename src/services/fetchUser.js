import axios from 'axios';
import { LOCAL_DB } from './api';

export const fetchUser = async (email) => await axios(`${LOCAL_DB}/${email}`)
  .then(r => r)
  .catch(e => e);

export const registerUser = async (data) => {
  const rta = await axios.post(`${LOCAL_DB}`, data);
  const response = rta.data;

  return response;
}

import axios from 'axios';
import { LOCAL_DB } from './api';

export const fetchUser = async ({ email, password }) => await axios.post(`${LOCAL_DB}/`, {
  email: email,
  password: password,
})
  .then(r => r)
  .catch(e => e);

export const fetchUserByEmail = async (email) => await axios(`${LOCAL_DB}/${email}`)
  .then(r => r)
  .catch(e => e);

export const registerUser = async (data) => {
  const rta = await axios.post(`${LOCAL_DB}/create`, {
    data
  });
  const response = await rta.data;

  return response;
}

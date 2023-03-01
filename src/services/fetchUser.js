import axios from 'axios';

const api = "http://192.168.1.108:3005/api/v1/users";

export const fetchUser = async (email) => axios(`${api}/${email}`)
  .then(r => r.data)
  .catch(e => e);

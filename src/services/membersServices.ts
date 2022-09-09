import axios from './axios';

export const getMembersInfo = () => {
  return axios.get('/singers');
};

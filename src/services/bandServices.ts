import axios from './axios';

export const getBandInfo = (data: { name: string }) => {
  return axios.get('/band/' + data.name);
};

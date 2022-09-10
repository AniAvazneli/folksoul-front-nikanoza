import { link } from 'types';
import axios from './axios';

export const getSocialLinks = () => {
  return axios.get('/links');
};

export const addNewLink = (data: { link: link; token: string }) => {
  return axios.post('/links/new', data.link, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

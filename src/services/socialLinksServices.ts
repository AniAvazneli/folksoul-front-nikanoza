import { LinkFormValues } from 'types';
import axios from './axios';

export const getSocialLinks = () => {
  return axios.get('/links');
};

export const addNewLink = (data: { link: LinkFormValues; token: string }) => {
  return axios.post('/links/new', data.link, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

export const updateLink = (data: {
  link: LinkFormValues;
  id: number;
  token: string;
}) => {
  return axios.put('/links/edit/' + data.id, data.link, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

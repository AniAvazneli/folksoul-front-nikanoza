import { TBandState } from 'types';
import axios from './axios';

export const getBandInfo = (data: { name: string }) => {
  return axios.get('/band/' + data.name);
};

export const updateBandLogo = (data: { form: FormData; token: string }) => {
  return axios.put('/band/edit/logo', data.form, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

export const updateBandDescription = (data: {
  band: TBandState;
  token: string;
}) => {
  return axios.put('/band/edit/description', data.band, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

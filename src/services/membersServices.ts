import { newMember } from 'types';
import axios from './axios';

export const getMembersInfo = () => {
  return axios.get('/singers');
};

export const addNewMember = (data: { member: newMember; token: string }) => {
  return axios.post('/singer/new', data.member, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

export const updateMember = (data: {
  member: newMember;
  id: number;
  token: string;
}) => {
  return axios.put('/singers/edit/' + data.id, data.member, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

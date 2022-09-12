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

export const deleteMember = (data: { id: number; token: string }) => {
  return axios.delete('/singers/delete/' + data.id, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

export const addMemberAvatar = (data: {
  imageForm: FormData;
  id: number;
  token: string;
}) => {
  return axios.post('/singers-logos/' + data.id, data.imageForm, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

export const updateMemberAvatar = (data: {
  imageForm: FormData;
  id: number;
  token: string;
}) => {
  return axios.put('/singers-logos/edit/' + data.id, data.imageForm, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
  });
};

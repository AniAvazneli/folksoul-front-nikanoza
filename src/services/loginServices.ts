import { LoginFormValues } from 'types/forms';
import axios from './axios';

export const login = (data: LoginFormValues) => {
  return axios.post('/login', data);
};

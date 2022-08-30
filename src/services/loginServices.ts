import { LoginFormValues } from 'types/forms';
import axios from './axios';

const login = (data: LoginFormValues) => {
  return axios.post('/login', data);
};

const loginServices = {
  login,
};

export default loginServices;

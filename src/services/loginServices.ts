import { LoginFormValues } from 'types/forms';
import instance from './axios';

const login = (data: LoginFormValues) => {
  return instance.post('/login', data);
};

const loginServices = {
  login,
};

export default loginServices;

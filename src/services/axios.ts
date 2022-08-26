import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;

import axios from 'axios';

console.log(process.env.API_URL);

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;

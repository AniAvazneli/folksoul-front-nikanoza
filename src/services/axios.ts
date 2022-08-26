import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://folksoul-api.nika-nozadze.redberryinternship.ge',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;

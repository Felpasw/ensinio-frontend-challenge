import axios from 'axios';

export const Axios = axios.create({
  baseURL: `${process.env.REACT_APP_DATA_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-covinfo-cdf17.cloudfunctions.net/app',
});

export default api;

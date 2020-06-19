import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gvpertin-com.umbler.net',
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spotify-server-json.herokuapp.com/',
});

export default api;

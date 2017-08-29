import axios from 'axios';
import config from 'config';

export default function(url, params = {}) {
  return axios.get(`${config.API.host}${url}`, {params: params})
}
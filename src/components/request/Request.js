import axios from 'axios';

export function Request() {
  this.prototype.get = (url, params) => axios.get(url, params);
  this.prototype.post = (url, data) => axios.post(url, data);
  return this;
}
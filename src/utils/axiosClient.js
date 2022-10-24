import axios from 'axios';
import {getToken} from '../helpers/tokenHelper';
let token;
getToken().then(res => {
  token = res;
});

const axiosClient = axios.create({
  baseURL: 'http://192.168.50.105:3000',
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  async config => {
    token = await getToken();
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  err => Promise.reject(err),
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {getToken} from '../helpers/tokenHelper';
// let token;
// getToken().then(res => {
//   token = res;
// });

const axiosClient = axios.create({
  baseURL: 'https://fpt-hightech-api.herokuapp.com/',
});

axiosClient.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    config.headers = {
      'x-access-token': `${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  err => Promise.reject(err),
);

axiosClient.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err),
);

export default axiosClient;

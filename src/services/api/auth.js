import axiosClient from '../../utils/axiosClient';

export const loginRequestApi = data => {
  return axiosClient.post('/access/login', data);
};
export const RegsiterRequestApi = data => {
  return axiosClient.post('/access/register', data);
};

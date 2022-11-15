import axiosClient from '../../utils/axiosClient';

export const loginRequestApi = data => {
  return axiosClient.post('/access/login', data);
};
export const regsiterRequestApi = data => {
  return axiosClient.post('/access/register', data);
};
export const changePasswordApi = data => {
  return axiosClient.put('/access/change-password', data);
};
export const forgotPasswordApi = data => {
  return axiosClient.put('/access/forgot-password', data);
};

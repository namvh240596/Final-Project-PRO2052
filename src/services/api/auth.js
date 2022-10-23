import axiosClient from '../../utils/axiosClient';

export const loginRequestApi = data => {
  return axiosClient.post('', data);
};
export const RegsiterRequestApi = data => {
  return axiosClient.post('', data);
};

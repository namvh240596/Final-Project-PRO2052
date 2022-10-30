import axiosClient from '../../utils/axiosClient';

export const getMyOrderApi = () => {
  return axiosClient.get('/order/me');
};

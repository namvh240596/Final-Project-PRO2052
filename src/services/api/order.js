import axiosClient from '../../utils/axiosClient';

export const getMyOrderApi = () => {
  return axiosClient.get('/order/me');
};
export const createOrderApi = data => {
  return axiosClient.post('/order', data);
};

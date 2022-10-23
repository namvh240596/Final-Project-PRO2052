import axiosClient from '../../utils/axiosClient';
export const getAllProductsApi = () => {
  return axiosClient.get('/products');
};

import axiosClient from '../../utils/axiosClient';
export const getAllProductsApi = () => {
  return axiosClient.get('/products');
};
export const getProductApi = id => {
  return axiosClient.get(`/product/${id}`);
};

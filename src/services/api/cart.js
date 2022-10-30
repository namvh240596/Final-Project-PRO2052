import axiosClient from '../../utils/axiosClient';

export const getCartApi = () => {
  return axiosClient.get('/cart/');
};

export const updateQuantityProduct = data => {
  return axiosClient.put('/cart/', data);
};

export const addOneProductToCartApi = data => {
  return axiosClient.post('/cart/', data);
};

export const addProductsToCartApi = data => {
  return axiosClient.post('/cart/', data);
};

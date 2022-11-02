import axiosClient from '../../utils/axiosClient';
export const getAllProductsApi = () => {
  return axiosClient.get('/product');
};
export const getProductApi = id => {
  return axiosClient.get(`/product/${id}`);
};
export const getAllProductsByTypeApi = type => {
  return axiosClient.get(`/product?populate=category&type=${type}`);
};
export const getMyFavoriteApi = () => {
  return axiosClient.get('/favorite/me');
};
export const getCheckFavoriteApi = id => {
  return axiosClient.get(`/favorite/check/${id}`);
};
export const changeFavoriteApi = data => {
  return axiosClient.post(`/favorite`, data);
};

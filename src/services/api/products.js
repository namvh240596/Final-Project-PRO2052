import axiosClient from '../../utils/axiosClient';
export const getAllProductsApi = () => {
  return axiosClient.get('/products');
};
export const getProductApi = id => {
  return axiosClient.get(`/product/${id}`);
};
export const getAllProductsByTypeApi = type => {
  return axiosClient.get(
    `/product/?page=&limit=&populate=category&type=${type}`,
  );
};
export const getAllCategoriesApi = () => {
  return axiosClient.get(`/category/`);
};

import {
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from './actionType';

export const getAllProductsRequest = (payload, onSuccess) => ({
  type: GET_ALL_PRODUCTS_REQUEST,
  payload: payload,
  onSuccess: onSuccess,
});
export const getAllProductsSuccess = payload => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: payload,
});
export const getAllProductsFailed = payload => ({
  type: GET_ALL_PRODUCTS_FAILED,
  payload: payload,
});

import {
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from './actionType';

export const getAllProductsRequest = payload => ({
  type: GET_ALL_PRODUCTS_REQUEST,
  payload: payload,
});
export const getAllProductsSuccess = payload => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: payload,
});
export const getAllProductsFailed = payload => ({
  type: GET_ALL_PRODUCTS_FAILED,
  payload: payload,
});

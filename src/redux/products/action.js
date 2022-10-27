import {
  GET_ALL_PRODUCTS_BY_TYPE_FAILED,
  GET_ALL_PRODUCTS_BY_TYPE_REQUEST,
  GET_ALL_PRODUCTS_BY_TYPE_SUCCESS,
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GEt_PRODUCT_FAILED,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from './actionType';
///////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllProductsByTypeRequest = payload => ({
  type: GET_ALL_PRODUCTS_BY_TYPE_REQUEST,
  payload: payload,
});
export const getAllProductsByTypeSuccess = payload => ({
  type: GET_ALL_PRODUCTS_BY_TYPE_SUCCESS,
  payload: payload,
});
export const getAllProductsByTypeFailed = payload => ({
  type: GET_ALL_PRODUCTS_BY_TYPE_FAILED,
  payload: payload,
});
///////////////////////////////////////////////////////////////////////////////////////////////////
export const getProductRequest = payload => ({
  type: GET_PRODUCT_REQUEST,
  payload: payload,
});
export const getProductSuccess = payload => ({
  type: GET_PRODUCT_SUCCESS,
  payload: payload,
});
export const getProductFailed = payload => ({
  type: GEt_PRODUCT_FAILED,
  payload: payload,
});
///////////////////////////////////////////////////////////////////////////////////////////////////

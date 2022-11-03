import {
  ADD_ONE_PRODUCT_TO_CART_FAILED,
  ADD_ONE_PRODUCT_TO_CART_REQUEST,
  ADD_ONE_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCTS_TO_CART_FAILED,
  ADD_PRODUCTS_TO_CART_REQUEST,
  ADD_PRODUCTS_TO_CART_SUCCESS,
} from './actionType';

//////////////////////////////////////////////// add one product to cart  ///////////////////////////////////////
export const addOneProductToCartRequest = payload => ({
  type: ADD_ONE_PRODUCT_TO_CART_REQUEST,
  payload: payload,
});

export const addOneProductToCartSuccess = payload => ({
  type: ADD_ONE_PRODUCT_TO_CART_SUCCESS,
  payload: payload,
});
export const addOneProductToCartFailed = payload => ({
  type: ADD_ONE_PRODUCT_TO_CART_FAILED,
  payload: payload,
});
///////////////////////////////////////////////// add products to cart  //////////////////////////////////////

export const addProductsToCartRequest = payload => ({
  type: ADD_PRODUCTS_TO_CART_REQUEST,
  payload: payload,
});

export const addProductsToCartSuccess = payload => ({
  type: ADD_PRODUCTS_TO_CART_SUCCESS,
  payload: payload,
});
export const addProductsToCartFailed = payload => ({
  type: ADD_PRODUCTS_TO_CART_FAILED,
  payload: payload,
});

import {all, call, put, takeLatest} from 'redux-saga/effects';
import {addOneProductToCartApi} from '../../services/api/cart';
import {
  ADD_ONE_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCTS_TO_CART_REQUEST,
  GET_CHOOSE_BANNER_REQUEST,
  GET_LIST_BANNER_REQUEST,
} from './actionType';

function* addOneProductToCartHandle(action) {
  const {payload} = action;
  try {
    const res = yield call(addOneProductToCartApi, payload);
  } catch (error) {
    console.log('addOneProductToCartHandle -> ', error);
  }
}
function* addProductsToCart(action) {
  const {payload} = action;
  try {
  } catch (error) {
    console.log('addProductsToCart -> ', error);
  }
}

function* cartSaga() {
  yield all([
    takeLatest(ADD_ONE_PRODUCT_TO_CART_REQUEST, addOneProductToCartHandle),
  ]);
  yield all([takeLatest(ADD_PRODUCTS_TO_CART_REQUEST, addProductsToCart)]);
}

export default cartSaga;

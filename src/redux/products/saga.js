import jwtDecode from 'jwt-decode';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {
  getAllProductsApi,
  getAllProductsByTypeApi,
  getProductApi,
} from '../../services/api/products';
import {
  getAllProductsByTypeRequest,
  getAllProductsByTypeSuccess,
  getAllProductsFailed,
  getAllProductsSuccess,
  getProductSuccess,
} from './action';
import {
  GET_ALL_PRODUCTS_BY_TYPE_REQUEST,
  GET_ALL_PRODUCTS_REQUEST,
  GET_PRODUCT_REQUEST,
} from './actionType';
///////////////////////////////// get all product //////////////////////////////////////////////////
function* getAllProductsHandle() {
  try {
    const res = yield call(getAllProductsApi);
    yield put(getAllProductsSuccess({res}));
  } catch (error) {
    yield put(getAllProductsFailed({error}));
  }
}
///////////////////////////////// get product by id //////////////////////////////////////////////////

function* getProductHandle(action) {
  const {payload} = action;
  console.log('pay load ', payload);
  try {
    const res = yield call(getProductApi, action?.payload);
    console.log('res ', res);
    yield put(getProductSuccess(res?.data));
  } catch (error) {
    console.log('getProductHandle =>', error);
    // yield put(getProductFailed({error}));
  }
}
///////////////////////////////// get product by type ////////////////////////////////
function* getProductByTypeHandle(action) {
  const {payload, onSuccess} = action;

  try {
    const res = yield call(getAllProductsByTypeApi, payload);
    console.log('res ', res?.data);
    yield put(getAllProductsByTypeSuccess({productsByType: res?.data}));
    onSuccess?.(action);
  } catch (error) {
    console.log('getProductByTypeHandle -> ', error);
  }
}
///////////////////////////////// saga //////////////////////////////////////////////////
function* productsSaga() {
  yield all([takeLatest(GET_ALL_PRODUCTS_REQUEST, getAllProductsHandle)]);
  yield all([takeLatest(GET_PRODUCT_REQUEST, getProductHandle)]);
  yield all([
    takeLatest(GET_ALL_PRODUCTS_BY_TYPE_REQUEST, getProductByTypeHandle),
  ]);
}

export default productsSaga;

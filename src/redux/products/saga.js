import jwtDecode from 'jwt-decode';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {getAllProductsApi, getProductApi} from '../../services/api/products';
import {
  getAllProductsFailed,
  getAllProductsSuccess,
  getProductSuccess,
} from './action';
import {GET_ALL_PRODUCTS_REQUEST, GET_PRODUCT_REQUEST} from './actionType';

function* getAllProductsHandle() {
  try {
    const res = yield call(getAllProductsApi);
    yield put(getAllProductsSuccess({res}));
  } catch (error) {
    yield put(getAllProductsFailed({error}));
  }
}
function* getProductHandle(action) {
  try {
    const res = yield call(getProductApi, action?.payload.id);
    yield put(getProductSuccess({res}));
  } catch (error) {
    console.log('getProductHandle =>', error);
    yield put(getProductFailed({error}));
  }
}

function* productsSaga() {
  yield all([takeLatest(GET_ALL_PRODUCTS_REQUEST, getAllProductsHandle)]);
  yield all([takeLatest(GET_PRODUCT_REQUEST, getProductHandle)]);
}

export default productsSaga;

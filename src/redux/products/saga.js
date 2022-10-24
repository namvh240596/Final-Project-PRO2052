import jwtDecode from 'jwt-decode';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {getAllProductsApi} from '../../services/api/products';
import {getAllProductsFailed, getAllProductsSuccess} from './action';
import {GET_ALL_PRODUCTS_REQUEST} from './actionType';

function* getAllProductsHandle() {
  try {
    const res = yield call(getAllProductsApi);
    yield put(getAllProductsSuccess({res}));
  } catch (error) {
    yield put(getAllProductsFailed({error}));
  }
}

function* productsSaga() {
  yield all([takeLatest(GET_ALL_PRODUCTS_REQUEST, getAllProductsHandle)]);
}

export default productsSaga;

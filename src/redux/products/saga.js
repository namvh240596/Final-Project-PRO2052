import jwtDecode from 'jwt-decode';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {getAllProductsApi} from '../../services/api/products';
import {getAllProductsSuccess} from './action';
import {GET_ALL_PRODUCTS_REQUEST} from './actionType';

function* getAllProductsHandle() {
  try {
    const res = yield call(getAllProductsApi);
    console.log(res);
    // yield put(getAllProductsSuccess({res}));
  } catch (error) {
    console.log('getAllProductsHandle => ', error);
  }
}

function* productsSaga() {
  yield all([takeLatest(GET_ALL_PRODUCTS_REQUEST, getAllProductsHandle)]);
}

export default productsSaga;

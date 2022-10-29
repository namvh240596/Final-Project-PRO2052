import {all, fork} from 'redux-saga/effects';
import productsSaga from '../redux/products/saga';
import authSaga from '../redux/auth/saga';
import categoriesSaga from './categories/saga';
import gearSaga from './gear/saga';

export default function* rootSaga() {
  yield all([fork(productsSaga)]);
  yield all([fork(categoriesSaga)]);
  yield all([fork(gearSaga)]);
}

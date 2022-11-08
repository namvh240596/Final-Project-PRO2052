import {all, fork} from 'redux-saga/effects';
import productsSaga from '../redux/products/saga';
import authSaga from './auth/saga';
import bannerSaga from './banner/saga';
import categoriesSaga from './categories/saga';
import gearSaga from './gear/saga';
import cartSaga from './cart/saga';
export default function* rootSaga() {
  yield all([fork(productsSaga)]);
  yield all([fork(categoriesSaga)]);
  yield all([fork(gearSaga)]);
  yield all([fork(authSaga)]);
  yield all([fork(bannerSaga)]);
  yield all([fork(cartSaga)]);
}

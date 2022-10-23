import {all, fork} from 'redux-saga/effects';
import productsSaga from '../redux/products/saga';
import authSaga from '../redux/auth/saga';

export default function* rootSaga() {
  yield all([fork(productsSaga)]);
}

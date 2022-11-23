import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getBannerApi} from '../../services/api/banner';
import {getListBannerSuccess} from './action';
import {GET_CHOOSE_LOCATION_REQUEST, GET_LIST_LOCATION_REQUEST} from './actionType';

function* getListLocationHandle() {
  try {
    const res = yield call(getBannerApi);
    yield put(getListBannerSuccess(res.data));
  } catch (error) {
    console.log('getListBannerHandle -> ', error);
  }
}
function* chooseLocationHandle(action) {
  try {
  } catch (error) {}
}

function* locationSaga() {
  yield all([takeLatest(GET_CHOOSE_LOCATION_REQUEST, chooseLocationHandle)]);
  yield all([takeLatest(GET_LIST_LOCATION_REQUEST, getListLocationHandle)]);
}

export default locationSaga;

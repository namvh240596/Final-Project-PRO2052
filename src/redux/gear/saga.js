import {all, takeLatest} from 'redux-saga/effects';
import {GET_LIST_GEAR_REQUEST, GET_CHOOSE_GEAR_REQUEST} from './actionType';

function* getListGearToCategoriesHandle(action) {
  try {
    yield put(getListGearSuccess(action?.payload));
  } catch (error) {
    console.log('getListGearToCategoriesHandle -> ', error);
  }
}
function* chooseGearHandle(action) {
  try {
    yield put(getChooseGearSuccess(action?.payload));
  } catch (error) {
    console.log('chooseGearHandle -> ', error);
  }
}

function* gearSaga() {
  yield all([takeLatest(GET_CHOOSE_GEAR_REQUEST, chooseGearHandle)]);
  yield all([takeLatest(GET_LIST_GEAR_REQUEST, getListGearToCategoriesHandle)]);
}

export default gearSaga;
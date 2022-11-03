import jwtDecode from 'jwt-decode';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {removeToken, setToken} from '../../helpers/tokenHelper';
import {loginRequestApi, regsiterRequestApi} from '../../services/api/auth';
import {loginSuccess, logoutSuccess, signUpSuccess} from './action';
import {LOGIN_REQUEST, LOGOUT_REQUEST, SIGN_UP_REQUEST} from './actionType';
///////////////////////////////// login //////////////////////////////////////////
function* loginHandle(action) {
  const {payload, onSuccess} = action;
  try {
    const res = yield call(loginRequestApi, {
      email: payload?.email,
      password: payload?.password,
    });
    onSuccess?.(action);
    setToken(res?.data.token);
    yield put(
      loginSuccess({
        email: res?.data.email,
        fullname: res?.data.fullname,
        phone: res?.data.phone,
        isLogin: true,
        token: res?.data.token,
      }),
    );
  } catch (error) {
    console.log('loginHandle -> ', error);
  }
}
///////////////////////////////// register  //////////////////////////////////////////

function* signUpHanlde(action) {
  const {payload, onSuccess} = action;
  try {
    const res = yield call(regsiterRequestApi, {
      email: payload?.email,
      password: payload?.password,
      fullname: payload?.fullname,
      phone: payload?.phone,
    });
    console.log('res -> ', res);
    onSuccess?.(action);
    yield put(signUpSuccess(res));
  } catch (error) {
    console.log('signUpHanlde -> ', error);
  }
}
///////////////////////////////// logout  //////////////////////////////////////////

function* logoutHandle(action) {
  const {onSuccess} = action;
  try {
    onSuccess?.(action);
    removeToken();
    yield put(logoutSuccess());
  } catch (error) {
    console.log('logoutHandle -> ', error);
  }
}
function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginHandle)]);
  yield all([takeLatest(SIGN_UP_REQUEST, signUpHanlde)]);
  yield all([takeLatest(LOGOUT_REQUEST, logoutHandle)]);
}

export default authSaga;

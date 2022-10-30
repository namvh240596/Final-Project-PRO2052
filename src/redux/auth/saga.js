import jwtDecode from 'jwt-decode';
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {setToken} from '../../helpers/tokenHelper';
import {loginRequestApi, regsiterRequestApi} from '../../services/api/auth';
import {loginSuccess} from './action';
import {LOGIN_REQUEST, LOGOUT_REQUEST, SIGN_UP_REQUEST} from './actionType';

function* loginHandle(action) {
  const {payload} = action;
  try {
    const res = yield call(loginRequestApi, {
      email: payload?.email,
      password: payload?.password,
    });
    console.log('res -> ', res);
    // setToken(res.token);
    // const user = jwtDecode(res.token);
    // onSuccess?.(action);
    // yield put(loginSuccess(user:res.user,isLogin:true, toekn: res.token));
  } catch (error) {
    console.log('loginHandle -> ', error);
  }
}
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
function* logoutHandle() {
  try {
    yield put({token: '', user: {}, isLogin: false});
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

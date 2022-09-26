import jwtDecode from 'jwt-decode';
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { setToken } from '../../helpers/tokenHelper';
import { loginRequestApi } from '../../services/api/auth';
import { loginSuccess } from './action';
import { LOGOUT_REQUEST } from './actionType';

function* loginHandle(obj) {
    const { email, password } = action;
    try {
        const res = yield call(loginRequestApi, { email, password });
        setToken(res.token);
        const user = jwtDecode(res.token);
        onSuccess?.(action);
        yield put(loginSuccess(res))
    } catch (error) {

    }
}


function* authSaga() {
    yield all([takeLatest(LOGOUT_REQUEST, loginHandle)])
}

export default authSaga();
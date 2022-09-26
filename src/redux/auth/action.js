import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload: payload,
});
export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload,
});
export const loginFailed = (payload) => ({
    type: LOGIN_FAILED,
    payload: payload,
});

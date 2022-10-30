import {
  CHANGE_PASSWORD_FAILED,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from './actionType';

export const loginRequest = (payload, onSuccess) => ({
  type: LOGIN_REQUEST,
  payload: payload,
  onSuccess: onSuccess,
});
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});
export const loginFailed = payload => ({
  type: LOGIN_FAILED,
  payload: payload,
});
///////////////////////////////////////////////////////////////////////////////////////
export const signUpRequest = (payload, onSuccess) => ({
  type: SIGN_UP_REQUEST,
  payload: payload,
  onSuccess: onSuccess,
});
export const signUpSuccess = payload => ({
  type: SIGN_UP_SUCCESS,
  payload: payload,
});
export const signUpFailed = payload => ({
  type: SIGN_UP_FAILED,
  payload: payload,
});
///////////////////////////////////////////////////////////////////////////////////////
export const changePasswordRequest = payload => ({
  type: CHANGE_PASSWORD_REQUEST,
  payload: payload,
});
export const changePasswordSuccess = payload => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: payload,
});
export const changePasswordFailed = payload => ({
  type: CHANGE_PASSWORD_FAILED,
  payload: payload,
});
///////////////////////////////////////////////////////////////////////////////////////
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccess = payload => ({
  type: LOGOUT_SUCCESS,
  payload: payload,
});

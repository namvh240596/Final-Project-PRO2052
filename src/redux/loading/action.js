import {
  GET_CHANGE_LOADING_FAILED,
  GET_CHANGE_LOADING_REQUEST,
  GET_CHANGE_LOADING_SUCCESS,
} from './actionType';

////////////////////////////// get change loading//////////////////////////////////////  //////////////

export const getChangeLoadingRequest = payload => ({
  type: GET_CHANGE_LOADING_REQUEST,
  payload: payload,
});

export const getChangeLoadingSuccess = payload => ({
  type: GET_CHANGE_LOADING_SUCCESS,
  payload: payload,
});
export const getChangeLoadingFailed = payload => ({
  type: GET_CHANGE_LOADING_FAILED,
  payload: payload,
});

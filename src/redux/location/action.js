import {
  GET_CHOOSE_LOCATION_FAILED,
  GET_CHOOSE_LOCATION_REQUEST,
  GET_CHOOSE_LOCATION_SUCCESS,
  GET_LIST_LOCATION_FAILED,
  GET_LIST_LOCATION_REQUEST,
  GET_LIST_LOCATION_SUCCESS,
} from './actionType';

////////////////////////////////////////////////////////////////////  //////////////
export const getListLocationRequest = payload => ({
  type: GET_LIST_LOCATION_REQUEST,
  
});

export const getListLocationSuccess = payload => ({
  type: GET_LIST_LOCATION_SUCCESS,
  payload: payload,
});
export const getLiLocationFailed = payload => ({
  type: GET_LIST_LOCATION_FAILED,
  payload: payload,
});
////////////////////////////////////////////////////////////////////  //////////////

export const getChooseLocationRequest = payload => ({
  type: GET_CHOOSE_LOCATION_REQUEST,
  payload: payload,
});

export const getChooseLocationSuccess = payload => ({
  type: GET_CHOOSE_LOCATION_SUCCESS,
  payload: payload,
});
export const getChooseLocationFailed = payload => ({
  type: GET_CHOOSE_LOCATION_FAILED,
  payload: payload,
});

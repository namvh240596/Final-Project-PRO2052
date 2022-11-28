import {LOGIN_FAILED, LOGIN_SUCCESS} from '../auth/actionType';
import {GET_NOTIFICATION_SUCCESS} from '../notification/actionType';
import {GET_ALL_FAVORITE_PRODUCT_SUCCESS} from '../products/actionType';
import {
  GET_CHANGE_LOADING_FAILED,
  GET_CHANGE_LOADING_REQUEST,
  GET_CHANGE_LOADING_SUCCESS,
} from './actionType';

const initialState = {
  loading: false,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANGE_LOADING_REQUEST:
      return {...state, loading: true};
    case GET_CHANGE_LOADING_FAILED:
      return {...state};
    case LOGIN_SUCCESS:
      return {...state, loading: false};
    case LOGIN_FAILED:
      return {...state, loading: false};
    case GET_ALL_FAVORITE_PRODUCT_SUCCESS:
      return {...state, loading: false};
    case GET_NOTIFICATION_SUCCESS:
      return {...state, loading: false};
    default:
      return {...state};
  }
};

export default loadingReducer;

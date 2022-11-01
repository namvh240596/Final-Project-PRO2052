import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from './actionType';

const initialState = {
  token: '',
  user: {
    email: '',
    phone: '',
    fullname: '',
  },
  isLogin: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action?.payload.token,
        isLogin: action?.payload.isLogin,
        user: {
          email: action?.payload.email,
          phone: action?.payload.phone,
          fullname: action?.payload.fullname,
        },
      };
    case LOGIN_FAILED:
      return {...state};
    case LOGOUT_REQUEST:
      return {...state};
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: res.token,
        isLogin: action?.payload.isLogin,
        user: {
          email: action?.payload.email,
          phone: action?.payload.phone,
          fullname: action?.payload.fullname,
        },
      };
    case SIGN_UP_REQUEST:
      return {...state};
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        token: action?.payload.token,
        isLogin: action?.payload.isLogin,
        user: action?.payload.user,
      };
    case SIGN_UP_FAILED:
      return {...state};
    default:
      return {...state};
  }
};

export default authReducer;

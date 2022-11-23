import {
  GET_CHOOSE_LOCATION_FAILED,
  GET_CHOOSE_LOCATION_SUCCESS,
  GET_LIST_LOCATION_FAILED,
  GET_LIST_LOCATION_REQUEST,
  GET_LIST_LOCATION_SUCCESS,
} from './actionType';

const initialState = {
  listLocation: [],
  location: {
    address: '',
    lat: 10,
    long: 108,
  },
};
const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_LOCATION_REQUEST:
      return {...state};
    case GET_LIST_LOCATION_SUCCESS:
      return {...state, listLocation: action?.payload};
    case GET_LIST_LOCATION_FAILED:
      return {...state};
    ///////////////////////////////////////////////////////////////////////////
    case GET_CHOOSE_LOCATION_SUCCESS:
      return {...state, location: action?.payload};
    case GET_CHOOSE_LOCATION_FAILED:
      return {...state};
    default:
      return {...state};
  }
};

export default locationReducer;

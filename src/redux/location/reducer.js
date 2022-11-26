import {
  GET_ADD_ONE_ADDRESS_SUCCESS,
  GET_CHANGE_ADDRESS_SUCCESS,
  GET_CHOOSE_LOCATION_SUCCESS,
  GET_DELETE_ADDRESS_SUCCESS,
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
    case GET_CHOOSE_LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload.location,
      };
    case GET_ADD_ONE_ADDRESS_SUCCESS:
      return {
        ...state,
        listLocation: action.payload.listLocation,
      };
    case GET_CHANGE_ADDRESS_SUCCESS:
      return {
        ...state,
        listLocation: action.payload.listLocation,
      };
    case GET_DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        listLocation: action.payload.listLocation,
      };
    default:
      return {...state};
  }
};

export default locationReducer;

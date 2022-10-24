import {
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from './actionType';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {...state};
    case GET_ALL_PRODUCTS_SUCCESS:
      return {...state, products: action.payload.res};
    case GET_ALL_PRODUCTS_FAILED:
      return {...state};
    default:
      return {...state};
  }
};

export default productsReducer;

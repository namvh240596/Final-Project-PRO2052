import {
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GEt_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
} from './actionType';

const initialState = {
  products: [],
  product: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {...state};
    case GET_ALL_PRODUCTS_SUCCESS:
      return {...state, products: action.payload.res};
    case GET_ALL_PRODUCTS_FAILED:
      return {...state};
    case GET_PRODUCT_SUCCESS:
      return {...state, product: action.payload.res};
    case GEt_PRODUCT_FAILED:
      return {...state};
    default:
      return {...state};
  }
};

export default productsReducer;

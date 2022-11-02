import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {PersistConfig, persistReducer} from 'redux-persist';
import productsReducer from './products/reducer';
import categoriesReducer from './categories/reducer';
import gearReducer from './gear/reducer';
import bannerReducer from './banner/reducer';
import authReducer from './auth/reducer';
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};
export const rootReducer = combineReducers({
  productsReducer,
  categoriesReducer,
  gearReducer,
  bannerReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

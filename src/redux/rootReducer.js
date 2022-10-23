import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {PersistConfig, persistReducer} from 'redux-persist';
import productsReducer from './products/reducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};
export const rootReducer = combineReducers({
  productsReducer,
});

import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';
import {persistStore} from 'redux-persist';

let middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares = [...middlewares, sagaMiddleware, logger];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

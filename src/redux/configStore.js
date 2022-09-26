import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';


let middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares = [...middleware, ...sagaMiddleware, logger];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middleware);
export const persistor = persistor(store);

sagaMiddleware.run(rootSaga);
import {Alert} from 'react-native';
import React, {useEffect} from 'react';
import AppRouter from './src/routers';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/configStore';
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;

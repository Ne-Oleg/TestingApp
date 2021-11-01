import React, { useEffect } from 'react';
import {MainScreen} from './src/screen/mainScreen';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import {store, persistor} from './src/redux/store';
import { Activity } from './src/componets/activity';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  },[]);
  
  return (
    <Provider store={store}>
      <PersistGate loading={<Activity/>} persistor={persistor}>
      <MainScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;

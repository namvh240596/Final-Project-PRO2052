import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNavigator from './bottomNavigator';
import {AuthNavigation} from './authNavigation';
import SplashScreen from '../screens/splash';
import Notification from '../screens/notification';
import Favorites from '../screens/favorite';
import ProductDetail from '../screens/productDetail';

const {Navigator, Screen, Group} = createNativeStackNavigator();

export default function AppRouter() {
  let isLogin = true;
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen">
        <Screen name="SplashScreen" component={SplashScreen} />
        <Screen
          name="MainNavigation"
          component={isLogin ? BottomNavigator : AuthNavigation}
        />
        <Screen name="Notification" component={Notification} />
        <Screen name="Favorites" component={Favorites} />
        <Screen name="ProductDetail" component={ProductDetail} />
      </Navigator>
    </NavigationContainer>
  );
}

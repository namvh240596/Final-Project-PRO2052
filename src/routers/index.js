import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNavigator from './bottomNavigator';
import {AuthNavigation} from './authNavigation';
import SplashScreen from '../screens/splash';
import Notification from '../screens/notification';
import Favorites from '../screens/favorite';
import ProductDetail from '../screens/productDetail';
import ListProduct from '../screens/listProduct';
import MyAddress from '../screens/account/address';
import Profile from '../screens/account/profile';
import MyOrder from '../screens/account/order';
import Payment from '../screens/account/payment';
import OrderDetail from '../screens/account/orderDetail';

const {Navigator, Screen, Group} = createNativeStackNavigator();

export default function AppRouter() {
  let isLogin = false;
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
        <Screen name="ListProduct" component={ListProduct} />
        <Screen name="MyAddress" component={MyAddress} />
        <Screen name="Profile" component={Profile} />
        <Screen name="MyOrder" component={MyOrder} />
        <Screen name="Payment" component={Payment} />
        <Screen name="OrderDetail" component={OrderDetail} />
      </Navigator>
    </NavigationContainer>
  );
}

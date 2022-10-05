import {View, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Explore from '../screens/explore';
import Cart from '../screens/cart';
import Account from '../screens/account';
import {scale, verticalScale} from '../utils/scale';
import AppIcon from '../assets/icons/index';
import {SvgXml} from 'react-native-svg';
import {TextStyles, AppTheme} from '../config/AppTheme';

const {Navigator, Screen} = createBottomTabNavigator();
export default function BottomNavigator() {
  const heightBottom =
    Platform.OS === 'ios' ? verticalScale(75) : verticalScale(65);
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: '100%',
          height: heightBottom,
          paddingBottom: verticalScale(7),
        },
        tabBarActiveTintColor: AppTheme.Colors.Blue,
        tabBarInactiveTintColor: AppTheme.Colors.Grey,
        tabBarHideOnKeyboard: true,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <SvgXml
                xml={focused ? AppIcon.IconHomeBlue : AppIcon.IconHometGrey}
                width={scale(22)}
                height={scale(22)}
              />
            );
          },
        }}
      />
      <Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgXml
                xml={
                  focused ? AppIcon.IconExploreBlue : AppIcon.IconExploreGrey
                }
                width={scale(22)}
                height={scale(22)}
              />
            );
          },
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgXml
                xml={focused ? AppIcon.IconCartBlue : AppIcon.IconCartGrey}
                width={scale(22)}
                height={scale(22)}
              />
            );
          },
        }}
      />
      <Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgXml
                xml={
                  focused ? AppIcon.IconAccountBlue : AppIcon.IconAccountGrey
                }
                width={scale(22)}
                height={scale(22)}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

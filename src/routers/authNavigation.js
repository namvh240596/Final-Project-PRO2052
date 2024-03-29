import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import RegisterSuccess from '../screens/auth/registerSuccess';
import CheckOTP from '../screens/auth/screenOtp';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthNavigation = () => {
    return (
        <Navigator initialRouteName='Login' screenOptions={{
            headerShown: false
        }}>
            <Screen name='Login' component={Login} />
            <Screen name='Register' component={Register} />
            <Screen name='RegisterSuccess' component={RegisterSuccess} />
            <Screen name='CheckOTP' component={CheckOTP} />
        </Navigator>
    )
}
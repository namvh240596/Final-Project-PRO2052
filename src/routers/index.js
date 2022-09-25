import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './bottomNavigator';
import { AuthNavigation } from './authNavigation';


export default function AppRouter() {
    let isLogin = true;
    return (
        <NavigationContainer>
            {
                isLogin ?
                    <BottomNavigator /> :
                    <AuthNavigation />
            }

        </NavigationContainer>
    )
}
import { View, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home'
import Explore from '../screens/explore'
import Cart from '../screens/cart'
import Offer from '../screens/offer'
import Account from '../screens/account'
import { verticalScale } from '../utils/scale'


const { Navigator, Screen } = createBottomTabNavigator()
export default function BottomNavigator() {
    const heightBottom = Platform.OS === 'ios' ? verticalScale(75) : verticalScale(65);
    return (
        <Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false,

            }}>
            <Screen name='Home' component={Home}
                options={{
                    tabBarLabel: LAB
                }}
            />
            <Screen name='Explore' component={Explore} />
            <Screen name='Cart' component={Cart} />
            <Screen name='Offer' component={Offer} />
            <Screen name='Account' component={Account} />

        </Navigator>
    )
}
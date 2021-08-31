import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LogInScreen from '../screens/user/LogInScreen'
import SignUpScreen from '../screens/user/SignUpScreen'
import { LOG_IN_SCREEN, SIGN_UP_SCREEN } from '../constants/ScreenNames'


const Tab = createBottomTabNavigator()
const AuthNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    display: 'none',
                },
            }}
        >
            <Tab.Screen
                name={LOG_IN_SCREEN}
                component={LogInScreen}
            />
            <Tab.Screen
                name={SIGN_UP_SCREEN}
                component={SignUpScreen}
            />
        </Tab.Navigator>
    )
}

export default AuthNavigator
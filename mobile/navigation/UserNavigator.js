import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import JobsNavigator from './JobsNavigator'
import { Text } from '../components/UI'
import Colors from '../constants/Colors'
import { JOBS_NAVIGATOR } from '../constants/ScreenNames'


const Tab = createBottomTabNavigator()
const UserNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: '',
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveBackgroundColor: '',
                tabBarInactiveTintColor: '#ACACAC',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={JOBS_NAVIGATOR}
                component={JobsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name='briefcase'
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color, fontSize: 12, }}>Munkák</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default UserNavigator
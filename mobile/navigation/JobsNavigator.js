import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import JobsScreen from '../screens/job/JobsScreen'
import JobDetailScreen from '../screens/job/JobDetailScreen'
import { JOBS_SCREEN, JOB_DETAIL_SCREEN } from '../constants/ScreenNames'


const Stack = createStackNavigator()
const JobsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name={JOBS_SCREEN}
                component={JobsScreen}
            />
            <Stack.Screen
                name={JOB_DETAIL_SCREEN}
                component={JobDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default JobsNavigator
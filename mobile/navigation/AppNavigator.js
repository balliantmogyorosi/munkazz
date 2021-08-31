import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './AuthNavigator'


const MyTheme = {
    ...DefaultTheme
}

const AppNavigator = () => {
    let Navigator = AuthNavigator

    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator />
        </NavigationContainer>
    )
}

export default AppNavigator
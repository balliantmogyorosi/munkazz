import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import AuthNavigator from './AuthNavigator'
import UserNavigator from './UserNavigator'


const MyTheme = {
    ...DefaultTheme
}

const AppNavigator = () => {
    const isAuth = useSelector(state => state.auth.token && state.auth.userId && state.auth.expiresIn)

    let Navigator
    if (isAuth) Navigator = UserNavigator
    else Navigator = AuthNavigator

    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator />
        </NavigationContainer>
    )
}

export default AppNavigator
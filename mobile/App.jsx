import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import AppNavigator from './navigation/AppNavigator'
import store from './store'


const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>

                <AppNavigator />
            </SafeAreaProvider>
        </Provider>
    )
}

export default App
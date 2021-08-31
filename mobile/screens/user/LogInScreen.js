import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { Button, Text, TextInput } from '../../components/UI'
import { logIn } from '../../store/actions/auth'
import { SIGN_UP_SCREEN } from '../../constants/ScreenNames'


const LogInScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const textInputChangeHandler = (id, value, isValid) => {

    }

    const logInHandler = () => {
        dispatch(logIn())
    }

    return (
        <View style={styles.screen}>
            <View>
                <Text style={{ fontSize: 32, }}>Bejelenkezés</Text>
                <View>
                    <TextInput
                        autoCapitalize='none'
                        id='email'
                        keyboardType='email-address'
                        onTextInputChange={textInputChangeHandler}
                        placeholder='Email cím'
                        returnKeyType='next'
                    />
                    <TextInput
                        autoCapitalize='none'
                        id='password'
                        keyboardType='default'
                        multiline={false}
                        onTextInputChange={textInputChangeHandler}
                        placeholder='Jelszó'
                        returnKeyType='done'
                        secureTextEntry
                    />
                    <Button
                        title='Bejelenkezek'
                        onPress={logInHandler}
                        variant='contained'
                        color='primary'
                    />
                </View>
            </View>
            <View>
                <Text>Nincs még fiókod?</Text>
                <Button
                    title='Regisztrálok'
                    onPress={() => navigation.navigate(SIGN_UP_SCREEN)}
                    variant='link'
                    color='accent'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
})

export default LogInScreen
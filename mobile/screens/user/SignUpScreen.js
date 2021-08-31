import React from 'react'
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { Button, Text, TextInput } from '../../components/UI'
import { LOG_IN_SCREEN } from '../../constants/ScreenNames'
import { signUp } from '../../store/actions/auth'


const SignUpScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const textInputChangeHandler = (id, value, isValid) => {

    }

    const signUpHandler = () => {
        dispatch(signUp())
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <View>
                    <Text>Regisztráció</Text>
                    <View>
                        <TextInput
                            placeholder='Email cím'
                        />
                        <TextInput
                            placeholder='Jelszó'
                        />
                        <TextInput
                            placeholder='Jelszó újra'
                        />
                        <Button
                            title='Regisztrálok'
                            onPress={signUpHandler}
                            variant='contained'
                            color='primary'
                            disabled
                        />
                    </View>
                </View>
                <View>
                    <Text>Van már fiókod?</Text>
                    <Button
                        title='Bejelenkezek'
                        onPress={() => navigation.navigate(LOG_IN_SCREEN)}
                        variant='link'
                        color='accent'
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    }
})

export default SignUpScreen
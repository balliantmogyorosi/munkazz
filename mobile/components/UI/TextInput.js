import React, { forwardRef, useEffect, useReducer } from 'react'
import { StyleSheet, Text, TextInput as TextInputRN, View } from 'react-native'
import PropTypes from 'prop-types'


const INPUT_CHANGE = 'INPUT_CHANGE'
const inputReducer = (state, action) => {
    const { payload: { value, isValid }, type } = action
    switch (type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value,
                isValid,
                touched: true,
            }
        default:
            return state
    }
}

const TextInput = forwardRef(({ autoCapitalize, keyboardType, id, multiline, onChangeText, onSubmitEditing, placeholder, returnKeyType, secureTextEntry }, ref) => {
    const [inputState, inputDispatch] = useReducer(inputReducer, { value: '', isValid: false, touched: false, })

    useEffect(() => {
        if (typeof onChangeText === 'function') {
            onTextInputChange(id, inputState.value, inputState.isValid)
        }
    }, [inputState, id, onChangeText])

    const changeTextHandler = text => {
        let isValid = true
        inputDispatch({
            type: INPUT_CHANGE,
            payload: { value: text, isValid },
        })
    }

    const submitEditingHandler = event => {
        if (onSubmitEditing && typeof onSubmitEditing === 'function') {
            onSubmitEditing(event)
        }
    }

    return (
        <View style={styles.textInputContainer}>
            <TextInputRN
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                ref={ref}
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={'black'}
                onChangeText={changeTextHandler}
                value={String(inputState.value)}
                multiline={multiline}
                onSubmitEditing={submitEditingHandler}
                onPressOut={event => console.log(event)}
                returnKeyType={returnKeyType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
})

TextInput.propTypes = {
    // id: PropTypes.string.isRequired,
    // onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}

const styles = StyleSheet.create({
    textInputContainer: {
        width: '100%',
        marginBottom: 8,
    },
    textInput: {
        padding: 12,
        backgroundColor: '#CFCFCF',
        borderRadius: 8,
        fontSize: 16,
    },
})

export default TextInput
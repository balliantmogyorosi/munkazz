import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import Text from './Text'
import Colors from '../../constants/Colors'


const Button = ({ color, disabled, onPress, style, textColor, textStyle, title, variant }) => {
    let buttonStyle = {}
    let buttonTextStyle = {}

    if (variant === 'contained') {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: disabled ? Colors[`${color}Light`] : Colors[color],
            borderColor: disabled ? Colors[`${color}Light`] : Colors[color],
        }
    } else if (variant === 'outlined') {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: 'transparent',
            borderColor: Colors[color] || '',
        }
        buttonTextStyle = {
            ...buttonTextStyle,
            color: Colors[color],
        }
    } else if (variant === 'link') {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            paddingVertical: 0,
        }
        buttonTextStyle = {
            ...buttonTextStyle,
            color: Colors[color],
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
            <View style={[styles.button, buttonStyle, style]}>
                <Text style={[styles.buttonText, buttonTextStyle, textStyle]}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        width: '100%',
        borderWidth: 2,
        borderRadius: 8,
    },
    buttonText: {
        color: Colors.light,
        fontSize: 16,
        textTransform: 'uppercase',
    },
    disabled: {
        backgroundColor: 'rgba(255, 255, 255, .1)',
    },
})

export default Button
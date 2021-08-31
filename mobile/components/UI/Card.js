import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'


const Card = ({ children, onPress, style }) => {
    return (
        <View style={[styles.card, style]}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        overflow: 'hidden',
    },
})

export default Card
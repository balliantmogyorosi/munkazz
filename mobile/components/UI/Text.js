import React from 'react'
import { StyleSheet, Text as TextRN } from 'react-native'


const Text = ({ children, style }) => {
    return (
        <TextRN style={[styles.text, style]}>
            {children}
        </TextRN>
    )
}

const styles = StyleSheet.create({
    text: {
    }
})

export default Text
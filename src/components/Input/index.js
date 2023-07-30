import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import styles from './styles'

export function Input(props) {
    const { label, source, isPassword, hidePassword, setHidePassword, ...otherProps } = props
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} {...otherProps} />
                <Image source={source} />
            </View>
        </>
    )
}

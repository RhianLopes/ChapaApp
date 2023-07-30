import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export function Title(props) {
    const { title, handleBack } = props
    return (
        <>
            <TouchableOpacity style={styles.arrow} onPress={handleBack}>
                <Image source={require('../../assets/Group.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line}/>
        </>
    )
}

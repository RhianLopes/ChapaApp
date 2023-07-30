import React from 'react'
import { View, TouchableOpacity, Image, ScrollView } from 'react-native'

import styles from './styles'

export function MenuScreen({ navigation }) {

  function handleChapa() {
    setTimeout(() => navigation.navigate('Chapa'), 100)
  }

  return (
    <View>
      
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={{ marginTop: 30 }} source={require('../../assets/logo.png')}/>
        <Image style={{ width: '100%' }} source={require('../../assets/background.png')}/>
      </ScrollView>
      <TouchableOpacity 
      style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 30
      }} 
      onPress={handleChapa}>
        <Image source={require('../../assets/chapa.png')}/>
      </TouchableOpacity>
    </View>
  )
}

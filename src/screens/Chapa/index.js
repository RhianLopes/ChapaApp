import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

export function ChapaScreen({ navigation }) {

  function handleTest() {
    navigation.navigate('Localizacao')
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/chapa.png')}/>
      <Text style={styles.title}>Olá! Eu sou o Chapa</Text>
      <Text style={styles.description}>Sou a nova ferramenta Fretebras que vai te ajudar a encontrar um frete sem cilada! A nossa busca vai ser para:</Text>
      <Image style={styles.tags} resizeMode={'cover'} source={require('../../assets/tags.png')}/>
      <TouchableOpacity 
      style={styles.buttonTest}
      onPress={handleTest}>
        <Text style={styles.labelTest}>Testar o Chapa</Text>
      </TouchableOpacity>
    </View>
  )
}

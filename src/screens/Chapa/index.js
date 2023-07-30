import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

export function ChapaScreen({ navigation }) {

  function handleTest() {
    setTimeout(() => navigation.navigate('Localizacao'), 100)
  }

  function handleBack() {
    setTimeout(() => navigation.navigate('MenuTabNavigation'), 100)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.exit}
      onPress={handleBack}>
        <Image source={require('../../assets/x.png')}/>
      </TouchableOpacity>
      <Image style={{ borderRadius: 50}} source={require('../../assets/Sign.png')}/>
      <Text style={styles.title}>Olá! Eu sou o Chapa</Text>
      <Text style={styles.description}>A nova ferramenta Fretebras que vai te ajudar a encontrar bons fretes sem cilada!</Text>
      <Text style={styles.description}>A nossa busca vai ser para:</Text>
      <Image style={styles.tags} resizeMode={'cover'} source={require('../../assets/iten-list.png')}/>
      <TouchableOpacity 
      style={styles.buttonTest}
      onPress={handleTest}>
        <Text style={styles.labelTest}>Iniciar busca</Text>
      </TouchableOpacity>
    </View>
  )
}

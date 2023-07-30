import React from 'react'
import { View, TouchableOpacity, Image, ScrollView, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
import styles from './styles'

export function DetalheFreteScreen({ navigation }) {

  function handleChapa() {
    navigation.navigate('Chapa')
  }

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={{ height: 3200, width: width, resizeMode: 'contain'}} source={{ uri: 'https://cdn.discordapp.com/attachments/1134591822602178651/1135251053374361662/Detalhe_do_frete.png'}}/>
      </ScrollView>
      <TouchableOpacity 
      style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 36,
        width: '90%',
        padding: 15,
        backgroundColor: '#08C45E',
        flexDirection: 'row',
        borderRadius: 20,
      }} 
      onPress={handleChapa}>
        <Image style={styles.image} source={require('../../assets/whatsapp.png')}/>
        <Text style={styles.label}>Chama no WhatsApp</Text>
      </TouchableOpacity>
    </View>
  )
}

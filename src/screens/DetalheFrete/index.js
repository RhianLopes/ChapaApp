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
      <Image 
          style={{ 
            position: 'absolute',
            width: width * 0.5,
            height: width,
          }} 
          source={require('../../assets/detalhes-frete.png')}
        />
      <ScrollView contentContainerStyle={styles.container}>
        
      </ScrollView>
      <TouchableOpacity 
      style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 30,
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

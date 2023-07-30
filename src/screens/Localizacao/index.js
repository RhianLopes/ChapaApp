import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Input, Title } from '../../components'

import styles from './styles'

export function LocalizacaoScreen({ navigation }) {

  function handleBack() {
    navigation.navigate('Chapa')
  }

  function handleNext() {
    navigation.navigate('Veiculo')
  }

  return (
    <View style={styles.container}>
      <Title title='Localização' handleBack={handleBack}/>
      <View style={styles.containerTitle}>
        <Text style={styles.subtitle}>Primeiro passo: definir sua</Text>
        <Text style={styles.subtitle}>localização</Text>
      </View>
      <View style={styles.containerDestiny}>
        <Image source={require('../../assets/grafismo.png')}/>
        <View style={styles.containerInput}>
          <Text style={styles.originLabel}>ORIGEM</Text>
          <Text style={styles.origin}>São José do Vale do Rio Preto, RJ</Text>
          <Text >30/07/2023</Text>
          <View style={styles.destiny}>
            <Input
              label='Destino' 
              placeholder='Destino (Opcional)'
              source={require('../../assets/map.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.line}/>
      <TouchableOpacity 
        style={styles.buttonCancel}>
          <Text style={styles.labelCancel}>Trocar origem</Text>
      </TouchableOpacity>
      <View style={styles.containerNext}>
        <View style={styles.line}/>
        <TouchableOpacity 
          style={styles.buttonTest}
          onPress={handleNext}>
            <Text style={styles.labelTest}>Continuar para veículo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

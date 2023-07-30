import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Title } from '../../components'

import styles from './styles'

export function VeiculoScreen({ navigation }) {
  const [checked, setChecked] = useState('first')

  function handleBack() {
    setTimeout(() => navigation.navigate('Localizacao'), 100)
  }

  function handleNext() {
    setTimeout(() => navigation.navigate('Carregamento'), 100)
    //TODO: call to api find and analysis the best freights by prompt
  }

  return (
    <View style={styles.container}>
      <Title title='Veículo' handleBack={handleBack}/>
      <View style={styles.containerTitle}>
        <Text style={styles.subtitle}>E para qual veículo você que buscar</Text>
        <Text style={styles.subtitle}>um frete?</Text>
      </View>
      <View style={styles.containerNext}>
        <View style={styles.line}/>
        <TouchableOpacity 
          style={styles.buttonNext}
          onPress={handleNext}>
            <Text style={styles.labelNext}>Buscar fretes</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.labelNext}>Buscar fretes</Text>
      <View style={styles.containerRadio}>
        <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
          <View style={styles.radio}>
            <RadioButton
              value='first'
              color='#E04747'
            />
            <Text style={styles.radioLabel}>Carreta LS <Text style={styles.radioSubLabel}>(baú)</Text></Text>
          </View>
          <View style={styles.radio}>
            <RadioButton
              value='second'
              color='#E04747'
            />
            <Text style={styles.radioLabel}>Fiorino</Text>
          </View>
          <View style={styles.radio}>
            <RadioButton
              value='third'
              color='#E04747'
            />
            <Text style={styles.radioLabel}>Carreta <Text style={styles.radioSubLabel}>(baú)</Text></Text>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  )
}

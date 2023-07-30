import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

export function ResultadoScreen({ navigation }) {
  const cards = [
    {
      id: 1,
      origin: 'São José do Vale do Rio Preto, RJ',
      destiny: 'Fortaleza, CE',
      km: '440km',
      content: 'Cimento',
      price: 'R$ 2.500,00'
    },
    {
      id: 2,
      origin: 'São José do Vale do Rio Preto, RJ',
      destiny: 'Belo Horizonte, MG',
      km: '350km',
      content: 'Cimento',
      price: 'R$ 2.200,00'
    },
    {
      id: 3,
      origin: 'São José do Vale do Rio Preto, RJ',
      destiny: 'Curitiba, PR',
      km: '880km',
      content: 'Cimento',
      price: 'R$ 3.500,00'
    },
  ]

  function handleBack() {
    navigation.navigate('Veiculo')
  }

  function handleNext() {
    navigation.navigate('DetalheFrete')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerTitle}>
        <TouchableOpacity style={styles.arrow} onPress={handleBack}>
            <Image source={require('../../assets/arrow-white.png')}/>
        </TouchableOpacity>
        <Text style={styles.header}>Combinação</Text>
      </View>
      <Text style={styles.title}>Alexandre, aqui estão 3 fretes interessantes que encontrei pra você</Text>
      {cards.map((item) => {
        return (
          <View style={styles.card} key={item.id}>
            <View style={styles.containerCardTitle}>
              <Image source={require('../../assets/flag.png')}/>
              <Image source={require('../../assets/company.png')}/>
            </View>
            <View style={styles.containerCardDestiny}>
              <Image style={styles.imageCardTrip} source={require('../../assets/icone-trajeto.png')}/>
              <View style={styles.containerCardTrip}>
                <Text style={styles.labelCardTrip}>{item.origin}</Text>
                <Text style={styles.labelCardTrip}>{item.destiny}</Text>
              </View>
            </View>
            <View style={styles.containerCardFlags}>
              <View style={styles.containerCardFlag}>
                <Text style={styles.containerCardFlagLabel}>{item.km}</Text>
              </View>
              <View style={styles.containerCardFlag}>
                <Text style={styles.containerCardFlagLabel}>{item.content}</Text>
              </View>
            </View>
            <View style={styles.containerCardValues}>
              <Image source={require('../../assets/money.png')}/>
              <Text style={styles.containerCardValueLabel}>{item.price}</Text>
            </View>
            <Text style={styles.containerCardFlagLabel}>Pedágio incluso no valor</Text>
            <View style={styles.line}/>
            <View style={styles.containerCardButtons}>
              <TouchableOpacity style={styles.containerCardButton} onPress={handleNext}>
                <Text style={styles.containerCardButtonLabel}>Combinar frete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      })}
      <TouchableOpacity style={styles.buttonAllFreights} onPress={handleNext}>
        <Text style={styles.labelAllFreights}>Ver todos os fretes (230)</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

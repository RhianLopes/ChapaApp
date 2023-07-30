import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

export function ResultadoScreen({ navigation }) {
  const cards = [
    {
      id: 1,
      amountFreightsToReturn: 12,
      uri: 'https://cdn.discordapp.com/attachments/1134591822602178651/1135261030923120752/image_5314.png',
      origin: 'São José do Vale do Rio Preto, RJ',
      destiny: 'Fortaleza, CE',
      km: '2.832 km',
      content: 'Cimento',
      price: 'R$ 4.500,00'
    },
    {
      id: 2,
      amountFreightsToReturn: 8,
      uri: 'https://cdn.discordapp.com/attachments/1134591822602178651/1135261202134601889/image_5314.png',
      origin: 'São José do Vale do Rio Preto, RJ',
      destiny: 'Porto Alegre, RS',
      km: '1.433 km',
      content: 'Madeira',
      price: 'R$ 3.500,00'
    },
    {
      id: 3,
      amountFreightsToReturn: 0,
      uri: 'https://cdn.discordapp.com/attachments/1134591822602178651/1135261409052197097/image_5314.png',
      origin: 'Uberlândia, MG',
      destiny: 'Primavera do leste, MT',
      km: '1.003 km',
      content: 'Piso',
      price: 'R$ 2.500,00'
    },
  ]

  function handleBack() {
    setTimeout(() => navigation.navigate('Veiculo'), 100)
  }

  function handleNext() {
    setTimeout(() => navigation.navigate('DetalheFrete'), 100)
  }

  function getFlag(item) {
    if (item.amountFreightsToReturn > 0) {
      return (
        <View style={styles.containerFlag}>
          <Text style={styles.containerFlagLabel}>{item.amountFreightsToReturn} FRETES DE RETORNO DISPONÍVEIS</Text>
        </View>
      )
    }
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
              {getFlag(item)}
              <Image style={{ width: 80, height: 40, resizeMode: 'cover'}} source={{ uri: item.uri}}/>
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
              <TouchableOpacity style={styles.containerCardNoButton} onPress={handleNext}>
                <Text style={styles.containerCardButtonNoLabel}>Não interessa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerCardButton} onPress={handleNext}>
                <Text style={styles.containerCardButtonLabel}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

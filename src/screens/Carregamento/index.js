import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import styles from './styles'

export function CarregamentoScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Resultado')
    }, 2000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aguarde um pouco</Text>
      <Text style={styles.subtitle}>Já estou buscando os melhores fretes para você meu chapa.</Text>
      <Spinner
        visible={loading}
        color='#E04747'
        overlayColor='rgba(0, 0, 0, 0)'
        indicatorStyle={{
          marginTop: 200
        }}
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  )
}

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
 
const Exercicio01 = ({ name }) => {
  return (

    <View >
      <Text style = {styles.container}> Olá, seja bem-vindo {name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        color: 'blue',
        padding: 120

    }
})

export default Exercicio01
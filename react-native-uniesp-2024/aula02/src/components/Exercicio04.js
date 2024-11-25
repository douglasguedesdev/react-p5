import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio04 = () => {
  return (
    
    <View style = {styles.container} >
      <Text></Text>
      <View style={[styles.box, {backgroundColor: 'coral' }]}/>
      <View style={[styles.box, {backgroundColor: 'black' }]}/>
      <View style={[styles.box, {backgroundColor: 'green' }]}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 5,
    },
    box: {
      flex: 1,
    },

})

export default Exercicio04
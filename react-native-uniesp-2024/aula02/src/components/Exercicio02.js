import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio02 = () => {
  return (
      <View style={styles.container}>
          <View style={styles.box}/>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
      },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        marginEnd: 15,
        
    },
})

export default Exercicio02
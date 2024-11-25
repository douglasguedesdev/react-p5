import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio01 = () => {
  return (
    <View style={styles.container}> 
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        height: 200,
        width: '100%',
        backgroundColor: 'red',
        borderWidth: 3,
    },
    box2: {
        height: 200,
        width: '100%',
        backgroundColor: 'green',
        borderWidth: 0.2,
    },
    box3: {
        height: 200,
        width: '100%',
        backgroundColor: 'yellow',
        borderWidth: 3,
    },
})


export default Exercicio01
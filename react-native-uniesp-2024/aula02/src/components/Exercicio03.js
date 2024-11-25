import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio03 = () => {
  return (
    <View style = {styles.container} >
        <View style = {[styles.box, {backgroundColor: 'pink' }]} />
        <View style = {styles.flexBox} />
        <View style = {styles.box} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    box: {
        height: '100%',
        width: 50,
        backgroundColor: 'silver'
    },
    flexBox: {
        flex: 1,
        backgroundColor: 'skyblue' 
    },
})

export default Exercicio03
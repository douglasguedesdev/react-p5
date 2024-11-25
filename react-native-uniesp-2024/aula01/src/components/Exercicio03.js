import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio03 = () => {
    const [text, setText] = useState('')


  return (
    <View style ={styles.container}>
        <Text style ={styles.textItalic}>Frases pensamentos</Text>
        <TextInput 
            value={text}
            onChangeText ={setText}
            placeholder='Digite seu texto aqui...'
            placeholderTextColor= {'silver'}
            style ={styles.input}

        />
        <Text style ={styles.text}>Sua mensagem aparece aqui:</Text>
        <Text>{text}</Text>
           
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:70,
        margin: '2%',
        backgroundColor: 'yellow',
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        height: 77,
        width: '92%',
        color: 'black',
        margin: '25%',
        backgroundColor: 'lightyellow',
        paddingHorizontal: 25,

    },
    text: {
        
        color: 'silver',
        alignItems: 'center',
    },
    textItalic: {
        color: 'black',
        fontSize: 22,
        fontStyle: 'italic'
    }

})

export default Exercicio03
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Exercicio05 = () => {
    const [text, setText] = useState('')
    const [books, setBooks] = useState([])
    const [idCounter, setIdCounter] = useState(1);
    
    const handleAddBooks = () => {
        if(text.trim()) {
            const newBook = { id: idCounter, name: text.trim() }
            setBooks([...books, newBook])
            setIdCounter(idCounter + 1)
            setText('')
        }
    }
  return (
    <View style={styles.container}>

        <View style={styles.headerStyle}>
            <Text style={styles.headerTitleStyle}>BIBLIOTECA</Text>
        </View>

        <View style={styles.subtitleStyle}>
        <Text style={styles.subtitleTextStyle}>Controle de Livros</Text>
        </View>
        
        <View style={styles.bodyStyle}>
            <Text style={styles.bookListStyle}>Saida de Livros</Text>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder='Digite o nome do Livro'
                placeholderTextColor={'silver'}
                style={styles.textInput}
            />
            <View style={styles.buttonStyle}>
                <Button title="Adicionar Livro" onPress={handleAddBooks}/>
            </View>
        </View>

        <View style={styles.listStyle}>
            <Text style={styles.bookExitStyle}>Livros com saida</Text>
            {books.map((book) => (
                <Text key={book.id}> {book.id}. {book.name} </Text>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 17,
        marginTop: 19,
        backgroundColor: '#f9f9f9',
    },
    headerStyle: {
        justifyContent: 'center',
        backgroundColor: '#333',
        height: 100,
        borderRadius: 11,
        marginBottom: 1

    },
    headerTitleStyle: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    subtitleStyle: {
        alignItems: 'center',
        marginBottom: 16
    },
    subtitleTextStyle: {
        fontSize: 21,
        color: '#555',
    },
    bodyStyle: {
        marginBottom: 20,
    },
    bookListStyle: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    textInput: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    buttonStyle: {
        marginTop: 15,
    },
    bookListStyle: {
        marginTop: 20
    },
    bookExitStyle: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 8,
    },

})

export default Exercicio05
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
const Exercicio04 = () => {
    const [selecionarItem, setSelecioneItem] = useState(null)
    
    const mochilaDeItens = [
        {id: '1', item: 'Benção Dejeso Dos Deuses', quantidade: 1, descricao: 'Cobiçado ate pelos proprios Deuses o DDD pode reviver seu personagem com 100% da vida, até mesmo Deuses que sua existência já Exauriu! '},
        {id: '2', item: 'Mapa do tesouro',          quantidade: 4, descricao: 'Mostra a localização do tesouro na Região encontrada '},
        {id: '3', item: 'Elixir de ervas raras',    quantidade: 2, descricao: 'Uma formula feita com sangue dos primeiros, restaura 66% da vida'},
        {id: '4', item: 'Fruta podre',              quantidade: 3, descricao: 'Um fruto colhido de uma árvore alimentada com os corpos e suspiros dos mortos, perde 35% da vida e restaura 60 de mana '},
        {id: '5', item: 'Chave enferrujada',        quantidade: 6, descricao: 'Uma chave que já serviu para algo mas está indecifravel a não ser pela pedra em sua base q só pode ser encontrada em um unico lugar'},
    ]

    const handlePress = (id) => {
        setSelecioneItem(id === selecionarItem ? null : id)
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>MOCHILA </Text>
        <Text style={styles.meusItemStyle}>
            Meus Itens
        </Text>
        {mochilaDeItens.map((itens) => (
            <TouchableOpacity key={itens.id} onPress={() => handlePress(itens.id)} >
                <View style={styles.itemContainer}> 
                    <Text style={styles.itemStyle}>{itens.item}</Text>
                    <Text style={styles.itemQuantidade}> quatidade: {itens.quantidade}</Text>
                </View>
                <Text style= {styles.titleDescriçaoItem}>Clique para saber mais</Text>
                {selecionarItem === itens.id && (
                    <Text style= {styles.descricaoStyle}>
                        {itens.descricao}
                    </Text>

                )}
            </TouchableOpacity>     
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        height: '100%',
        padding: 10,
        backgroundColor: '#FFB347',
    },
    title: {
        borderWidth: 1,
        fontSize: 29,
        textAlign: 'center',
        color: 'black',
        paddingTop: 10,
        paddingVertical: 15,
        backgroundColor: '#FF8C00'
    },
    meusItemStyle: {
        borderBottomWidth: 2,        
        color: '#3B2A1A',
        fontSize: 25,
    },
    itemContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 3,
        marginBottom: -5,
    },
    itemStyle: {
        color: '#3E2723',
        fontSize: 17,
        padding: 3,
    },
    itemQuantidade: {
        borderWidth: 1,
        borderRadius: 7,
        color: '#6D4C41',
        fontSize: 15,
    },
    titleDescriçaoItem: {
        color: '#6D4C41',
        fontSize: 13,
        marginBottom: 4,
    },
    descricaoStyle: {
        borderBottomWidth: 0.3,
        color: '#6D4C41',
        fontSize: 13,
        marginRight: 28,
        marginBottom: 4,
    }

})

export default Exercicio04
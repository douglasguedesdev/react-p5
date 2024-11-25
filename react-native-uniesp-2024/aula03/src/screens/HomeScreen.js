import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';


const HomeScreen = ({ navigation }) => {

  const users = [
      {id: 1, name: 'John Snow', age: 30, gender: 'male' },
      {id: 2, name: 'Janny Memmy', age: 27, gender: 'female' }
  ];

  const [clickSound, setClickSound] = useState();
  
  const playSound = async () => {
    if(clickSound) {
      await clickSound.replayAsync();
    }
  };

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/click-sound.mp3')
    )
    setClickSound(sound)
  };

  useEffect(() => {
    loadSound()

    return () => {
      if(clickSound) {
        clickSound.unloadAsync();
      }
    }
  }, []);

  const handlePress = (user) => {
    playSound()
    navigation.navigate('Details', { user })
  };

  return (
    <View style={styles.container} >
      {users.map((user) => (
          <TouchableOpacity 
              key={user.id}
              style={styles.userCard}
              onPress={() => handlePress(user)}
          >
              <Text style={styles.userName} >
                  {user.name}
              </Text>
          </TouchableOpacity>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#B8F1F4',
    },
    userCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#A0E7E5',
      marginVertical: 12,
      padding: 9,
      borderRadius: 10.05,
      shadowColor: '#000',
      shadowOffset: { width: 0.05, height: 1 },
      shadowOpacity: 15.05,
      shadowRadius: 17.22,
      elevation: 7
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    
    },
    userName: {
      fontSize: 18,
    }
  });

export default HomeScreen
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route }) => {

    const { user } = route.params
    const profileImage = user.gender === 'male' ? require('../../assets/images/profile_man.png') 
    : require('../../assets/images/profile_woman.png')
  return (
    <View style={styles.container} >
        <Image source={profileImage} style={styles.profileImage } />
        <Text style={styles.name}>Name: {user.name} </Text>
        <Text style={styles.detail}>Age: {user.age}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3E5FC',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#D0EFFF'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
  }
});
      
export default DetailsScreen
import { StyleSheet } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer style={style.container}>
      <AppNavigation />
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App
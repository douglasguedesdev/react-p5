import React from 'react'
import { ThemeProvider } from '@react-navigation/native'
import MainComponent from './src/components/MainComponent'

const App = () => {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  )
}

export default App
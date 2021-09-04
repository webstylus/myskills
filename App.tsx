import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Home } from './src/pages/Home'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#121015'} />
      <Home />
    </SafeAreaView>
  )
}

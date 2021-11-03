import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Home } from './src/pages/Home'
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </SafeAreaView>
  )
}

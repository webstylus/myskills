import React, { useEffect } from 'react'
import codePush from 'react-native-code-push'
import { SafeAreaView, StatusBar } from 'react-native'
import { Home } from './src/pages/Home'
import SplashScreen from 'react-native-splash-screen'


function App() {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE
    });

    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121015' }}>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </SafeAreaView>
  )
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(App)

import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'

import Navigation from './src/Navigation'
import { store } from './src/redux/store'
import { setupHttpConfig } from './src/utils/http'


const App = () => {
  useEffect(() => {
    setupHttpConfig()
  }, [])

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;  
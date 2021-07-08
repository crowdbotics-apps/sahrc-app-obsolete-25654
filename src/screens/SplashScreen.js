import React from 'react'
import { 
  View, 
  StyleSheet,
  Text,
  Image
} from 'react-native'
import { colors } from '../utils/colors'

const SplashScreen = () => (
  <View style={styles.body}>
    <Image style={styles.icon} source={require('../assets/VectorWhite.png')} />
    <Text style={styles.text}>The Social & Health</Text>
    <Text style={styles.text}>Research Center</Text>
    <Image style={styles.iconLoading} source={require('../assets/LoadingBar.png')} />
         
  </View>
)
const styles = StyleSheet.create({
  iconLoading: {
    width: 195,
    height: 6,
    marginTop: '100%'
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 22,
    textAlign: 'center'
  },
  icon: {
    width: 92,
    height: 92,
    marginTop: 120
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    padding: 17,
    flex: 1
  }
})
export default SplashScreen;
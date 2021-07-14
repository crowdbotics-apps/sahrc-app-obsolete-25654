import React from 'react'
import { 
  View, 
  StyleSheet,
  Text,
  Image,
  ScrollView
} from 'react-native'
import { colors } from '../utils/colors'

const SplashScreen = () => (
  <ScrollView style={styles.scroll}>
    <View style={styles.body}>
      <Image style={styles.icon} source={require('../assets/VectorWhite.png')} />
      <Text style={styles.text}>The Social & Health</Text>
      <Text style={styles.text}>Research Center</Text>
    </View>
  </ScrollView>
)
const styles = StyleSheet.create({
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
    padding: 17
  },
  scroll: {
    backgroundColor: colors.green
  }
})
export default SplashScreen;
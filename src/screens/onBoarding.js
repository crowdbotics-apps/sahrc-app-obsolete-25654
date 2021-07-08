import React from 'react'
import { 
  View, 
  StyleSheet,
  Text,
  Image
} from 'react-native'
import { colors } from '../utils/colors'
import Button from '../components/Button'

const onBoarding = ({ navigation }) => (
  <View style={styles.body}>
    <Image style={styles.icon} source={require('../assets/VectorWhite.png')} />
    <Text style={styles.text}>The Social & Health</Text>
    <Text style={styles.text}>Research Center</Text>
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>Striving to Prevent Obesity, Diabetes and Heart Disease by Promoting Healthy Lifestyles</Text>
      <View style={styles.space}/>   
      <Button name="Log in" style={true} onPress={() => navigation.navigate('Login')} />
      <Button name="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  </View>
)
const styles = StyleSheet.create({
  space: {
    height: 100
  },
  buttonContainer: {
    width: '100%',
    marginTop: '40%',

  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    
  },
  icon: {
    width: 92,
    height: 92,
    marginTop: 40,
    marginBottom: 20

   
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    padding: 17,
    flex: 1
  }
})
export default onBoarding;
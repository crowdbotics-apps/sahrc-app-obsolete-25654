import React from 'react'
import { 
  View, 
  StyleSheet,
  Text,
  Image,
  ScrollView
} from 'react-native'
import { colors } from '../utils/colors'
import Button from '../components/Button'

const title = `The Social and Health
Research Center INC`

const Welcome = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
    <View style={styles.body}>
      <Image style={styles.icon} source={require('../assets/VectorWhite.png')} />
      <Text style={styles.text}>{title}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Text style={styles.subText}>Striving to Prevent Obesity, Diabetes and Heart Disease by Promoting Healthy Lifestyles</Text>
      <Button name="Log in" color="white" onPress={() => navigation.navigate('Login')} />
      <Button name="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  </ScrollView>
  
)
const styles = StyleSheet.create({
  space: {
    height: 100
  },
  buttonContainer: {
    width: '100%',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  subText: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    padding: 24
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
    padding: 17,
  },
  scrollContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  scroll: {
    backgroundColor: colors.green,
  }
})
export default Welcome;
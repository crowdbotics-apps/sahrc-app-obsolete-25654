import React from 'react'
import { 
  View, 
  StyleSheet,
  TouchableOpacity,
  Text 
} from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'

const Login = ({ navigation }) => (
  <View style={styles.body}>
    <Layout title="Log in"/>
    <View style={styles.login}>
      <Input placeholder="Email Address" />
      <Input placeholder="Password" password={true} />
      <Button name="Log in" />
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.passwordContainer}><Text style={styles.passwordText}>Forgot password ? </Text></TouchableOpacity>
  </View>
)
const styles = StyleSheet.create({
  passwordText: {
    fontSize: 16,
    color: colors.white
  },
  passwordContainer: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {

  },
  body: {
    padding: 17,
    backgroundColor: colors.green,
    flex: 1
  }
})
export default Login;
import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  Alert
} from 'react-native'
import { useDispatch } from 'react-redux'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import { resetPassword } from '../redux/app/actions'

const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch()

  const [reset, setReset] = useState('')
  const press = () => {
    if (!reset) {
      Alert.alert('Please enter all fields')
    } else {
      console.log('forgotScreen :>> ', reset);
      dispatch(resetPassword(reset))
    }
  }


  return (
    <View style={styles.body}>
      <Layout title="Forgot password" onPressX={() => navigation.navigate('onBoarding')} onPressBack={() => navigation.navigate('Login')}/>
      <Input onChangeText={setReset} placeholder="Enter email address" />
      <Button onPress={() => press()} name="Reset Password" />
    </View>
  ) 
}
const styles = StyleSheet.create({
 
  body: {
    backgroundColor: colors.green,
    padding: 17,
    flex: 1
  }
})
export default ForgotPassword;
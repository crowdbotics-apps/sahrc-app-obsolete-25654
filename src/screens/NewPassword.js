import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  Alert
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux';
import { changePassword } from '../redux/app/actions';
  
const NewPassword = ({ navigation }) => {
  const dispatch = useDispatch()

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const updatePassword = () => {
    if (newPassword === confirmPassword) {
      dispatch(changePassword(newPassword))
    } else {
      Alert.alert('Your passwords do not match')
    }
  }
   
  return (
    <View style={styles.body}>
      <Layout title="New Password" onPressX={() => navigation.navigate('Welcome')} onPressBack={() => navigation.navigate('ForgotPassword')}/>
      <Input onChangeText={setNewPassword} placeholder="Set new password " password={true} />
      <Input onChangeText={setConfirmPassword} placeholder="Confirm password " password={true} />
      <Button name="Submit" onPress={() => updatePassword()} />
      <Button name="Cancel" style={true} onPress={() => navigation.navigate('Login')} />
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
export default NewPassword;
import React from 'react'
import { 
  View, 
  StyleSheet, 
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'

const ForgotPassword = () => (
  <View style={styles.body}>
    <Layout title="Forgot password"/>
    <Input placeholder="Enter email address" />
    <Button name="Reset Password" />
  </View>
)
const styles = StyleSheet.create({
 
  body: {
    backgroundColor: colors.green,
    padding: 17,
    flex: 1
  }
})
export default ForgotPassword;
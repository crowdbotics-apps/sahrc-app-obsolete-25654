import React from 'react'
import { View, StyleSheet } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => (
  <View style={styles.body}>
    <Input title="Username: " placeholder=" Enter username or email "/>
    <Input title="Password: " placeholder=" Enter password " bool={true}/>
    <Button name="Login" />
  </View>
)
const styles = StyleSheet.create({
  body: {
    
  }
})
export default Login;
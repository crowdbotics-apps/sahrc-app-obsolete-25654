import React from 'react'
import { 
  View, 
  StyleSheet, 
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'

const NewPassword = () => (
  <View style={styles.body}>
    <Layout title="New Password"/>
    <Input placeholder="Set new password " password={true} />
    <Input placeholder="Confirm password " password={true} />
    <Button name="Submit" />
    <Button name="Cancel" style={true} />
  </View>
)
const styles = StyleSheet.create({
 
  body: {
    backgroundColor: colors.green,
    padding: 17,
    flex: 1
  }
})
export default NewPassword;
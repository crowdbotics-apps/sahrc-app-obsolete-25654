import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  TextInput
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Button from '../components/Button'

const InputToken = () => {
  const [value, setValue] = useState('')
  return (
    <View style={styles.body}>
      <Layout title="Input Token"/>
      <View style={styles.token}>
        <TextInput style={[styles.inputToken, { backgroundColor: value ? colors.green : null }]} placeholder="-" onChangeText={(v) => setValue(v)} placeholderTextColor={colors.white}/>
        <TextInput style={[styles.inputToken, { backgroundColor: value ? colors.green : null }]} placeholder="-" onChangeText={(v) => setValue(v)} placeholderTextColor={colors.white}/>
        <TextInput style={[styles.inputToken, { backgroundColor: value ? colors.green : null }]} placeholder="-" onChangeText={(v) => setValue(v)} placeholderTextColor={colors.white}/>
        <TextInput style={[styles.inputToken, { backgroundColor: value ? colors.green : null }]} placeholder="-" onChangeText={(v) => setValue(v)} placeholderTextColor={colors.white}/>
      </View>
      
      <Button name="Submit"/>
         
    </View>
  )
}
const styles = StyleSheet.create({
  token: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40
  },
  inputToken: {
    borderColor: colors.white,
    borderWidth: 1,
    textAlign: 'center',
    width: 64,
    height: 64,
    color: colors.white,
    marginHorizontal: 5,
    borderRadius: 8,
    fontSize: 20
        
  },
 
  body: {
    backgroundColor: colors.green,
    padding: 17,
    flex: 1
  }
})
export default InputToken;
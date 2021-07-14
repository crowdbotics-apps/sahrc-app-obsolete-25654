import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  TextInput
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Button from '../components/Button'
import InputMini from '../components/InputMini'

const InputToken = () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  return (
    <View style={styles.body}>
      <Layout title="Input Token"/>
      <View style={styles.token}>
        <InputMini onChangeText={(v) => setValue1(v)} value={value1}/>
        <InputMini onChangeText={(v) => setValue2(v)} value={value2}/>
        <InputMini onChangeText={(v) => setValue3(v)} value={value3}/>
        <InputMini onChangeText={(v) => setValue4(v)} value={value4}/>
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
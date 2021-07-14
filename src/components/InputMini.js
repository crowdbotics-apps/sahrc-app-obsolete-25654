import React from 'react'
import { 
  View, 
  StyleSheet, 
  TextInput
} from 'react-native'
import { colors } from '../utils/colors'

const InputMini = ({ onChangeText, value }) => (
  <View style={styles.body}>
    <TextInput style={[styles.inputToken, { backgroundColor: value ? colors.white : null }, { color: value ? 'black' : null }]} placeholder="-" onChangeText={onChangeText} placeholderTextColor={colors.white}/>
  </View>
)
const styles = StyleSheet.create({
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
  }
})
export default InputMini;
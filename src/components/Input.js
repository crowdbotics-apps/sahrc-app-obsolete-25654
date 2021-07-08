import React from 'react'
import { View, StyleSheet, TextInput, Text, Image } from 'react-native'
import { colors } from '../utils/colors';

const Input = ({ placeholder, password, onChangeText, value, width, paddingLeft }) => (
  <View style={[
    styles.body, { width,
      paddingLeft }
  ]}>
    <Image style={styles.icon} source={require('../assets/message.png')} />
    <TextInput style={styles.input}
      placeholder={placeholder} 
      secureTextEntry={password} 
      placeholderTextColor={colors.white}
      onChangeText={onChangeText}
      value={value}
    />
  </View>
)
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    color: colors.white,
    padding: 10,
    width: '90%'
  },
  body: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white
  }
})
export default Input;
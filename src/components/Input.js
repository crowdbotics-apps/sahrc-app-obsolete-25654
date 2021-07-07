import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

const Input = ({ placeholder, bool, title }) => (
  <View style={styles.body}>
    <Text style={styles.title}>{title}</Text>
    <TextInput style={styles.input}
      placeholder={placeholder} 
      secureTextEntry={bool} 
    />
  </View>
)
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    paddingBottom: 10
  },
  body: {
    padding: 10
  }
})
export default Input;
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const Button = ({ name }) => (
  <View style={styles.body}>
    <TouchableOpacity style={styles.button}> 
      <Text style={styles.buttonText}>
        {name}
      </Text>
    </TouchableOpacity>
  </View>
)
const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 15
  },
  body: {
    padding: 10
  }
})
export default Button;
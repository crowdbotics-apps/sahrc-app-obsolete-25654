import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { colors } from '../utils/colors';

const Button = ({ name, onPress, style, color }) => {
  if (style === true && color) {
    return (
      <View style={[
        styles.body02, { borderColor: color,
          backgroundColor: color }
      ]}>
        <TouchableOpacity style={styles.button} onPress={onPress} > 
          <Text style={[styles.buttonText02, { color: colors.white }]}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    )
  } else if (color) {
    return (
      <View style={[styles.body02, { borderColor: color }]}>
        <TouchableOpacity style={styles.button} onPress={onPress} > 
          <Text style={[styles.buttonText02, { color }]}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.body01}>
      <TouchableOpacity style={styles.button} onPress={onPress} > 
        <Text style={styles.buttonText01}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  ) 
}
const styles = StyleSheet.create({
  buttonText02: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white
  },
  buttonText01: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.green
  },
  button: {
    padding: 15
  },
  body02: {
    marginTop: 15,
    padding: 10,
    //  borderColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    height: 76,
   
  },
  body01: {
    marginTop: 15,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    height: 76,
   
  }
})
export default Button;
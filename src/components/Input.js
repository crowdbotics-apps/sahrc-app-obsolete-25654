import React from 'react'
import { View, StyleSheet, TextInput, Image } from 'react-native'
import { colors } from '../utils/colors';

const Input = ({ image, placeholder, password, onChangeText, value, width, marginLeft }) => (
  <View style={[
    styles.body, { width,
      marginLeft }
  ]}>
    <Image style={styles.icon} source={image} />
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
    marginHorizontal: 4,
  },
  input: {
    color: colors.white,
    padding: 8,
    flex: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 16,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white
  }
})
export default Input;
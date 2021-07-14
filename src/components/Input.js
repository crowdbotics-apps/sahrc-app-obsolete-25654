import React, { useState } from 'react'
import { View, StyleSheet, Modal, TextInput, Image, Alert, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors';

const Input = ({ image, placeholder, password, onChangeText, value, width, marginLeft, drop }) => {
  const [modalVisible, setModalVisible] = useState(true)
  return (
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
      {
        drop 
          ? <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image style={styles.icon} source={require('../assets/dropbutton.png')} />
          </TouchableOpacity>
          : null 
      }
    </View>
  ) 
}
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'red',
    position: 'absolute',
    flex: 1,
    width: '100%'
  },
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
import React from 'react'
import { 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  Text
} from 'react-native'
import { colors } from '../utils/colors'

const Layout = ({ title, onPressX, onPressBack }) => (
  <View style={styles.body}>
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/logoText.png')} />
      <TouchableOpacity onPress={onPressX}><Image style={styles.icon_x} source={require('../assets/icons=x.png')} /></TouchableOpacity>
    </View>
    <View style={styles.titleBar}>
      <TouchableOpacity onPress={onPressBack}><Image style={styles.icon_back} source={require('../assets/backIcon.png')} /></TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  </View>
)
const styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    color: colors.white,
    fontWeight: 'bold',
    marginHorizontal: 22
  },
  icon_back: {
    width: 40,
    height: 40
  },
  titleBar: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
        
  },
  icon_x: {
    width: 40,
    height: 40
  },
  logo: {
    width: 250,
    height: 66
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    backgroundColor: colors.green,
  }
})
export default Layout;
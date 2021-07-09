import React from 'react'
import { 
  StyleSheet, 
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { colors } from '../utils/colors'

const NotificationArea = ({ time, content }) => (
  <TouchableOpacity style={styles.containerNotification}>
    <Image style={styles.icon} source={require('../assets/crac.png')} />
    <Text style={styles.content}>
      {content}
    </Text>
    <Text style={styles.time}>{time}</Text>
  </TouchableOpacity>
)
const styles = StyleSheet.create({
  time: {
    color: colors.textTime
  },
  content: {
    width: '60%',
    fontWeight: 'bold',
    color: colors.black
  },
  icon: {
    width: 43,
    height: 43
  },
  containerNotification: {
    marginTop: 8,
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8
  }
})
export default NotificationArea;
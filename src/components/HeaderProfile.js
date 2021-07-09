import React from 'react'
import { 
  View, 
  StyleSheet, 
  Text,
  Image,
  TouchableOpacity 
} from 'react-native'
import { colors } from '../utils/colors'

const HeaderProfile = ({ onPress, name, edit, back }) => (
  <View style={styles.body}>
    <View style={styles.header}>
      <View style={styles.headerBar}>
        {
          back === true 
            ? null
            : <TouchableOpacity>
              <Image style={styles.backButton} source={require('../assets/backIcon2.png')} />
            </TouchableOpacity>
        }
        <Text style={styles.headerBarTitle}>{name}</Text>
      </View>
      {
        edit === null ? null 
          : <TouchableOpacity onPress={onPress}>
            <Image style={styles.backButton} source={edit === false ? require('../assets/editPen1.png') : require('../assets/editPen2.png') } />
          </TouchableOpacity>
      }
    </View>
  </View> 
)
const styles = StyleSheet.create({
  backButton: {
    width: 40,
    height: 40
  },
  headerBarTitle: {
    fontSize: 24
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  body: {
    backgroundColor: colors.grayBackground,
  }
})
export default HeaderProfile;
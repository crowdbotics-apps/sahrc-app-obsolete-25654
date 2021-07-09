import React, { useEffect, useState } from 'react'
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { colors } from '../utils/colors'
import Button from '../components/Button'
import HeaderProfile from '../components/HeaderProfile'
import { logout } from '../redux/auth/actions'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/app/actions';

const Profile = () => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState({})
  const profile = useSelector((state) => state.App.profile)

  useEffect(() => {
    if (profile?.id) {
      setData({
        email: profile?.email,
        location: profile?.location,
        first_name: profile?.first_name,
        last_name: profile?.last_name,
      })
    }
  }, [profile])

  const onChange = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  const onSubmit = () => {
    dispatch(updateProfile(data))
  }
  
  
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.body}>
        <HeaderProfile back={false} onPress={() => setEdit(!edit)} edit={edit} name="Profile" />
        <View style={styles.profileContainer}>
          <Image style={styles.avatar} source={require('../assets/avatar.png')} />
          <Text style={styles.avatarTitle}>{`${data.first_name} ${data.last_name}`}</Text>
           
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Email: </Text>
            <TextInput editable={edit} style={styles.input} onChangeText={(v) => onChange('email', v)} value={data.email} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Location: </Text>
            <TextInput editable={edit} style={styles.input} onChangeText={(v) => onChange('location', v)} value={data.location}/>
          </View>
          <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row',
              alignItems: 'center' }}>
              <Text style={styles.inputTitle}>Password: </Text>
              <TextInput editable={edit} style={styles.inputPass} placeholder="New password" secureTextEntry={true}/>
            </View>
            <TouchableOpacity><Text style={styles.passTitle}>Change</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          {
            edit === true 
              ? <>
                <View style={{ width: '100%' }}>
                  <Button name="Save" onPress={() => onSubmit()} style={true} color={colors.green}/>
                  <Button name="Cancel" onPress={() => setEdit(!edit)}/>
                </View>
              </>
              : <View style={{ width: 180 }}><Button onPress={() => dispatch(logout())} name="Log Out" color={colors.logoutBorder}/></View>
          }
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  inputPass: {
    width: '50%'
  },
  button: {
    alignItems: 'center',
    padding: 20,
    marginTop: 40
  },
  passTitle: {
    color: colors.green,
    fontSize: 16
  },
  input: {
    textAlign: 'right',
    width: '85%'
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: colors.borderInput,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between'
  },
  avatarTitle: {
    fontSize: 16,
    marginHorizontal: 20
  },
  avatar: {
    width: 80,
    height: 80
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25
  },
  body: {
    paddingBottom: 30
   
  },
  scroll: {
    backgroundColor: colors.grayBackground,
    
  }
})
export default Profile;
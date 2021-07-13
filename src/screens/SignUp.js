import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Alert
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { signUp } from '../redux/auth/actions'
import SocialLogins from '../components/SocialLogins'

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({});

  const onSubmit = () => {
    if (!values.email || !values.password || !values.first_name || !values.last_name || !values.location || !values.birth_date) {
      Alert.alert('Please enter all fields')
    } else if (values.password !== values.confirm_password) {
      Alert.alert('Passwords do not match')
    } else {
      dispatch(signUp(values))
    }
  }

  const onChange = (key, value) => {
    setValues({
      ...values,
      [key]: value
    })
  }

  return (
    <ScrollView>
      <View style={styles.body}>
        <Layout title="Sign Up" onPressX={() => navigation.navigate('Welcome')} onPressBack={() => navigation.navigate('Welcome')}/>
        <View style={styles.container} >
          <Input image={require('../assets/message.png')} onChangeText={(v) => onChange('email', v)} value={values.email} placeholder="Email Address" />
          <View style={styles.containerName}>
            <Input image={require('../assets/name.png')} onChangeText={(v) => onChange('first_name', v)} value={values.first_name} placeholder="Name" width="48%" />
            <Input image={require('../assets/name.png')} onChangeText={(v) => onChange('last_name', v)} value={values.last_name} placeholder="Last Name" width="48%" marginLeft="4%"/>
          </View>
          <View style={styles.containerName}>
            <Input image={require('../assets/gender.png')} onChangeText={(v) => onChange('birth_date', v)} value={values.birth_date} placeholder="Gender" width="48%" />
            <Input image={require('../assets/location.png')} onChangeText={(v) => onChange('location', v)} value={values.location} placeholder="Location" width="48%" marginLeft="4%"/>
          </View>
          <Input image={require('../assets/schoolcode.png')} placeholder="School Code" />
          <Input image={require('../assets/password.png')} onChangeText={(v) => onChange('password', v)} value={values.password} placeholder="Password" password={true} />
          <Input image={require('../assets/password.png')} onChangeText={(v) => onChange('confirm_password', v)} value={values.confirm_password} placeholder="Confirm Password" password={true} />
          
        </View>
        <Button onPress={onSubmit} name="Sign Up"/>
        <SocialLogins/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  containerName: {
    flexDirection: 'row'
  },
 
  body: {
    backgroundColor: colors.green,
    padding: 17,
    paddingBottom: 25
  }
})
export default SignUp;
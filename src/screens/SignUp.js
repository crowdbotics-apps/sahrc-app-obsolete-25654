import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { signUp } from '../redux/auth/actions'

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
        <Layout title="Sign Up" onPressX={() => navigation.navigate('OnBoarding')} onPressBack={() => navigation.navigate('OnBoarding')}/>
        <View style={styles.container} >
          <Input onChangeText={(v) => onChange('email', v)} value={values.email} placeholder="Email Address" />
          <View style={styles.containerName}>
            <Input onChangeText={(v) => onChange('first_name', v)} value={values.first_name} placeholder="Name" width="48%" />
            <Input onChangeText={(v) => onChange('last_name', v)} value={values.last_name} placeholder="Last Name" width="48%" marginLeft="4%"/>
          </View>
          <View style={styles.containerName}>
            <Input onChangeText={(v) => onChange('birth_date', v)} value={values.birth_date} placeholder="Date of Birth" width="48%" />
            <Input onChangeText={(v) => onChange('location', v)} value={values.location} placeholder="Location" width="48%" marginLeft="4%"/>
             
          </View>
          <Input onChangeText={(v) => onChange('password', v)} value={values.password} placeholder="Password" password={true} />
          <Input onChangeText={(v) => onChange('confirm_password', v)} value={values.confirm_password} placeholder="Confirm Password" password={true} />
          
        </View>
        <Button onPress={onSubmit} name="Sign Up"/>
        <Text style={styles.socialText}> Or  </Text>
        <Text style={styles.socialText}> Social Media Sign Up </Text>
        <View style={styles.socailContainer}>
          <TouchableOpacity><Image style={styles.logo} source={require('../assets/facebookIcon1.png')} /></TouchableOpacity>
          <TouchableOpacity><Image style={styles.logo} source={require('../assets/instagramIcon1.png')} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64,
    marginHorizontal: 15
  },
  socialText: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginTop: 20
  },
  socailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
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
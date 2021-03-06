import React, { useState } from 'react'
import { 
  ScrollView,
  View, 
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import { login } from '../redux/auth/actions';
import { useDispatch } from 'react-redux';
import SocialLogins from '../components/SocialLogins'

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({});

  const onSubmit = () => {
    if (!values.email || !values.password) {
      Alert.alert('Please enter all fields')
    } else {
      console.log('values login :>> ', values);
      dispatch(login(values))
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
        <Layout title="Log in" onPressX={() => navigation.navigate('Welcome')} onPressBack={() => navigation.navigate('Welcome')} />
        <View style={styles.login}>
          <Input image={require('../assets/message.png')} onChangeText={(v) => onChange('email', v)} value={values.email} placeholder="Email Address" />
          <Input image={require('../assets/password.png')} onChangeText={(v) => onChange('password', v)} value={values.password} placeholder="Password" password={true} />
          <Input image={require('../assets/schoolcode.png')} placeholder="School Code" />
          <Button onPress={onSubmit} name="Log in" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.passwordContainer}><Text style={styles.passwordText}>Forgot password ? </Text></TouchableOpacity>
        <View style={styles.social}>
          <SocialLogins text="Sign In"/>
        </View>
      </View>
    </ScrollView>
  ) 
}
const styles = StyleSheet.create({
  social: {
    paddingTop: 10,
    height: 200
  },
  passwordText: {
    fontSize: 16,
    color: colors.white
  },
  passwordContainer: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {

  },
  body: {
    padding: 17,
    paddingBottom: 25,
    backgroundColor: colors.green,
   
  }
})
export default Login;
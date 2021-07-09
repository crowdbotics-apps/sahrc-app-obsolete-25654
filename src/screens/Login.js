import React, { useState } from 'react'
import { 
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
    <View style={styles.body}>
      <Layout title="Log in" onPressX={() => navigation.navigate('OnBoarding')} onPressBack={() => navigation.navigate('OnBoarding')} />
      <View style={styles.login}>
        <Input onChangeText={(v) => onChange('email', v)} value={values.email} placeholder="Email Address" />
        <Input onChangeText={(v) => onChange('password', v)} value={values.password} placeholder="Password" password={true} />
        <Button onPress={onSubmit} name="Log in" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.passwordContainer}><Text style={styles.passwordText}>Forgot password ? </Text></TouchableOpacity>
    </View>
  ) 
}
const styles = StyleSheet.create({
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
    padding: 16,
    backgroundColor: colors.green,
    flex: 1
  }
})
export default Login;
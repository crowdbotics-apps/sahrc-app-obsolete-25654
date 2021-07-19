import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Alert,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import CustomDateTimePicker from '../components/DateTimePicker/'

import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { signUp } from '../redux/auth/actions'
import SocialLogins from '../components/SocialLogins'


const SignUp = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const dispatch = useDispatch()
  const [values, setValues] = useState({});
  
  const [visible, setVisible] = useState(false);
  console.log('visible :>> ', visible);

  const onSubmit = () => {
    if (!values.email || !values.password || !values.first_name || !values.last_name || !values.zip_code || !values.dob) {
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
            <View style={styles.genderContainer}>
              <View style={styles.genderIconContainer}>
                <Image style={styles.genderIcon} source={require('../assets/gender.png')} />
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  style={{ color: colors.white }}
                  
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                >
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>
            </View>

            <Input image={require('../assets/location.png')} onChangeText={(v) => onChange('zip_code', v)} value={values.zipc_ode} placeholder="Zip code" width="48%" marginLeft="4%"/>
          </View>
          <Input image={require('../assets/schoolcode.png')} onChangeText={(v) => onChange('school_code', v)} value={values.school_code} placeholder="School Code" />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Input image={require('../assets/dateofbirth.png')} onChangeText={(v) => onChange('dob', v)} value={values.dob} placeholder="Date of birth" />
            < CustomDateTimePicker visible={visible} />
          </TouchableOpacity>
          <Input image={require('../assets/password.png')} onChangeText={(v) => onChange('password', v)} value={values.password} placeholder="Password" password={true} />
          <Input image={require('../assets/password.png')} onChangeText={(v) => onChange('confirm_password', v)} value={values.confirm_password} placeholder="Confirm Password" password={true} />
          
        </View>
        <Button onPress={onSubmit} name="Sign Up"/>
        <SocialLogins text="Sign Up"/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  pickerContainer: {
    width: '65%' 
  },
  genderIcon: { width: 24,
    height: 24 },
  genderIconContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10     
  },
  genderContainer: {
    borderWidth: 1,
    borderColor: colors.white,
    width: '48%',
    justifyContent: 'center',
    height: 60,
    borderRadius: 8,
    marginTop: 16,
    flexDirection: 'row'    
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
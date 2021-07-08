import React from 'react'
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Text,
  Image,
  
} from 'react-native'
import { colors } from '../utils/colors'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'

const SignUp = () => (
  <ScrollView>
    <View style={styles.body}>
      <Layout title="Sign Up"/>
      <View style={styles.container} >
        <Input placeholder="Email Address" />
        <View style={styles.containerName}>
          <Input placeholder="Name" width="45%" paddingLeft="5%"/>
          <Input placeholder="Sure Name" width="45%" paddingLeft="5%"/>
        </View>
        <View style={styles.containerName}>
          <Input placeholder="Age" width="45%" paddingLeft="5%"/>
          <Input placeholder="Location" width="45%" paddingLeft="5%"/>
           
        </View>
        <Input placeholder="Password" password={true} />
        <Input placeholder="Confirm Password" password={true} />
        
      </View>
      <Button name="Sign Up"/>
      <Text style={styles.socialText}> Or  </Text>
      <Text style={styles.socialText}> Social Media Sign Up </Text>
      <View style={styles.socailContainer}>
        <Image style={styles.logo} source={require('../assets/facebookIcon1.png')} />
        <Image style={styles.logo} source={require('../assets/instagramIcon1.png')} />
      </View>
     
         
    </View>
  </ScrollView>
)
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
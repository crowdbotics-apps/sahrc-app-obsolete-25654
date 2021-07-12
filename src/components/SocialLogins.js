import React, { useEffect } from 'react'
import { 
  View, 
  StyleSheet, 
  Image,
  TouchableOpacity,
  Text,
  Platform
} from 'react-native'
import { colors } from '../utils/colors'

import { Settings, LoginManager } from 'react-native-fbsdk-next';
import InstagramLogin from 'react-native-instagram-login'
import store from 'react-native-simple-store'
import CookieManager from 'react-native-cookies';


const SocialLogins = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Settings?.initializeSDK();
      console.log('Settings :>> ', Settings);
    }
  }, [])

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('==> Login cancelled');
        } else {
          console.log(`==> Login success with permissions: ${ 
            result.grantedPermissions.toString()}`);
        }
      },
      function (error) {
        console.log(`==> Login fail with error: ${error}`);
      }
    );
  }


  setIgToken = async (data) => {
    await store.save('igToken', data.access_token)
    await store.save('igUserId', data.user_id)
    this.setState({ igToken: data.access_token,
      igUserId: data.user_id })
  }

  return (
    <>
      <Text style={styles.socialText}> Or  </Text>
      <Text style={styles.socialText}> Social Media Sign Up </Text>
      <View style={styles.socailContainer}>
        <TouchableOpacity onPress={() => loginWithFacebook()}><Image style={styles.logo} source={require('../assets/facebookIcon1.png')} /></TouchableOpacity>
        <TouchableOpacity onPress={() => this.instagramLogin.show()}>
          <InstagramLogin
            ref={(ref) => (this.instagramLogin = ref)}
            appId="your-app-id"
            appSecret="your-app-secret"
            redirectUrl="your-redirect-Url"
            scopes={['user_profile', 'user_media']}
            onLoginSuccess={ this.setIgToken }
            onLoginFailure={(data) => console.log(data)}
          />
     
          <Image style={styles.logo} source={require('../assets/instagramIcon1.png')} />
        </TouchableOpacity>
      </View>

    </>      
  ) 
}
const styles = StyleSheet.create({
  socialText: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginTop: 20
  },
  logo: {
    width: 64,
    height: 64,
    marginHorizontal: 15
  },
  socailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  containerName: {
    flexDirection: 'row'
  }
})
export default SocialLogins;
import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';

import Login from './screens/Login'
import ForgotPassword from './screens/ForgotPassword';
import NewPassword from './screens/NewPassword';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/SplashScreen';
import onBoarding from './screens/onBoarding';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import InputToken from './screens/InputToken';

const isReadyRef = React.createRef();
const navigationRef = React.createRef();

const Stack = createStackNavigator()

const Navigation = () => {
  const dispatch = useDispatch();

  let token = null;
  const [isMounted, setIsMounted] = useState(null);
  const accessToken = useSelector((state) => state.Auth.accessToken);
  const profile = useSelector((state) => state.App.profile);
  
  useEffect(() => () => {
    isReadyRef.current = false
  }, []);
  
  useEffect(() => {
    (async () => {
      token = await StorageUtils.getAccessToken();
      const email = await StorageUtils.getUser();
      dispatch(setUser(email, token))
      addTokenToHttp(token)
      if (token) {
        dispatch(getProfile())
      }
    })()
    
    setTimeout(() => {
      setIsMounted(true)
    }, 500);
  }, [])
  
  const isLogggedIn = Boolean(accessToken || token)
  console.log('accessToken :>> ', accessToken);
  return (
    <NavigationContainer >
      {/* <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="InputToken" component={InputToken} /> */}
      {isMounted === null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      ) 
        : isLogggedIn ? (
       
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        )
          : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="onBoarding" component={onBoarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="NewPassword" component={NewPassword} />
        
            </Stack.Navigator>
          )
      }
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 15,
    resizeMode: 'contain' 
  },
});

export function navigate (name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export default Navigation;
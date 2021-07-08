import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';

import Login from './screens/Login'
import ForgotPassword from './screens/ForgotPassword';
import NewPassword from './screens/NewPassword';
import InputToken from './screens/InputToken';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/SplashScreen';
import onBoarding from './screens/onBoarding';

const isReadyRef = React.createRef();
const navigationRef = React.createRef();

const Stack = createStackNavigator()

const Navigation = () => {
  const dispatch = useDispatch();
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={onBoarding}
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="onBoarding" component={onBoarding} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="InputToken" component={InputToken} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
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
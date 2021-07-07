import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';

import Login from './screens/Login'

const isReadyRef = React.createRef();
const navigationRef = React.createRef();

const Stack = createStackNavigator()

const Navigation = () => {
  const dispatch = useDispatch();
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={Login}
        screenOptions={() => ({
          headerTitleAlign: 'center'
        })}
      >
        <Stack.Screen name="Login" component={Login} />
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
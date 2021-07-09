import {createStackNavigator} from 'react-navigation-stack';

import {SignUp1Container} from './screens/signUp1/signUp1.container';

import Home from './screens';

export default SignUp01BlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignUp1: {screen: SignUp1Container},
  },
  {
    initialRouteName: 'Home',
  },
);

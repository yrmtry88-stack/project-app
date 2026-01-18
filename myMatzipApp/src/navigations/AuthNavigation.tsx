import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import { createStaticNavigation } from '@react-navigation/native';

const AuthStack = createStackNavigator({
  screens:{
    AuthHome: AuthHomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen
  }

});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
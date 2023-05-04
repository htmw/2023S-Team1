import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from 'nativewind';
import auth from '@react-native-firebase/auth';

//import Screens
import OnboardingScreen from './screens/authentication/Onboarding';
import LoginScreen from './screens/authentication/Login';
import RegisterScreen from './screens/authentication/Register';
import ForgotPasswordScreen from './screens/authentication/ForgotPassword';
import BottomTabNavigator from './screens/authentication/BottomTabNavigator';
import Feedback from './screens/navigation/Feedback';


const Stack = createNativeStackNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown:false}} name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen options={{headerShown:false}} name="Dashboard" component={BottomTabNavigator} />
        <Stack.Screen options={{headerShown:false}} name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



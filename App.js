import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, OnboardingScreen, Register } from './screens';
import { NativeWindStyleSheet } from "nativewind";
//import {AsyncStorage} from 'react-native';
import { useState } from 'react';


const Stack = createNativeStackNavigator();
export default function App() {
  //const [isFirstLaunch, setIsFirstLaunch] = useState(false);


  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

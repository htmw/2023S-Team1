import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Login, OnboardingScreen, Register } from './screens';
import { NativeWindStyleSheet } from "nativewind";
import { Provider } from 'react-native-paper'
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

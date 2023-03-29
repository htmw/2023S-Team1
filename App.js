import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ForgotPassword, Login, OnboardingScreen, Register,BottomTabNavigator } from './screens';
import { NativeWindStyleSheet } from "nativewind";
import { Provider } from 'react-native-paper'
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{headerShown:false}} name="Dashboard" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





NativeWindStyleSheet.setOutput({
  default: "native",
});

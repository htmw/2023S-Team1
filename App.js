import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ForgotPassword, Login, OnboardingScreen, Register } from './screens';
import { NativeWindStyleSheet } from "nativewind";
import { Provider } from 'react-native-paper'
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return(
    <Tab.Navigator
    initialRouteName={Home}
    screenOptions={({route}) => ({
      tabBarIcon:({focused, color, size}) => {
        let iconName;
        let rn = route.name;

        if(rn === {Home}){
          iconName = focused ? 'Home' : 'home-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
    })}>
      
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





NativeWindStyleSheet.setOutput({
  default: "native",
});

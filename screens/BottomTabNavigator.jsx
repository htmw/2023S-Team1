import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from "./BottomNavigator/Home";
import Bluetooth from  "./BottomNavigator/Bluetooth";
import Friends from  "./BottomNavigator/Friends";
import Settings from  "./BottomNavigator/Settings";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return(
      <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown:false,
        tabBarIcon:({color,size,focused}) => {
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if(route.name === "Friends"){
            iconName = focused ? 'people' : 'people-outline';
          }
          else if(route.name === "Bluetooth"){
            iconName = focused ? 'bluetooth' : 'bluetooth-outline';
          }
          else if(route.name === "Settings"){
            iconName = focused ? 'settings' : 'settings-outline';
          } 
          return <Icon name={iconName} size={32} color={color}/>    
                       
        },
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Bluetooth" component={Bluetooth} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }

  export default BottomTabNavigator;
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


//Bottom Tab Navigators
import Home from '../navigation/Home';
import Bluetooth from  '../navigation/Bluetooth'
import Friends from  '../navigation/Friends';
import Settings from  '../navigation/Settings';
import Notifications from  '../navigation/Notifications';
import QRScanner from "../navigation/QRScanner";

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
          else if(route.name === "QRScanner"){
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          }
          else if(route.name === "Bluetooth"){
            iconName = focused ? 'bluetooth' : 'bluetooth-outline';
          }
          else if(route.name === "Notifications"){
            iconName = focused ? 'md-notifications' : 'md-notifications-outline';
          }
          else if(route.name === "Settings"){
            iconName = focused ? 'settings' : 'settings-outline';
          } 
          return <Icon name={iconName} size={32} color={color} />                
        },
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="QRScanner" component={QRScanner} />
        <Tab.Screen name="Bluetooth" component={Bluetooth} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Settings" component={Settings} />

      </Tab.Navigator>
    );
  }

  export default BottomTabNavigator;
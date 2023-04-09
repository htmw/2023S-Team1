import { StatusBar } from 'expo-status-bar';
import { View, Text,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';



const OnboardingScreen = () => {
  const navigation = useNavigation()
  return (
    <Onboarding
      onSkip={()=> navigation.replace("Login")}
      onDone={()=> navigation.replace("Login")}
      pages={[
        {
          backgroundColor: '#5295ad',
          image: <Image source={require('../images/Welcome.png')} className="w-80 h-72 object-contain" />,
          title: 'Welcome to Armor!',
          subtitle: 'Armor app Help stop the spread by updating your data. When outside the home, stay at least six feet away from other people, and avoid groups',
          titleStyles:{color:'white',fontSize:30},
          subTitleStyles:{color:'white',fontSize:17,textAlign:'center'}
        },
        {
            backgroundColor: '#5295ad',
            image: <Image source={require('../images/Welcome2.png')} className="w-64 h-64 object-contain"/>,
            title: 'How does it works?',
            subtitle: 'Armor uses Data of your contacts and loved ones has the app installed. using the data App warns you when effected person is update their status in the app',
            titleStyles:{color:'white',fontSize:30},
            subTitleStyles:{color:'white',fontSize:17,textAlign:'center'}
          },
      ]}
      
    />
  )
}

export default OnboardingScreen
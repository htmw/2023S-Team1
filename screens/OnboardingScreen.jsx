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
          backgroundColor: 'rgb(14 165 233)',
          image: <Image source={require('../images/onboarding_1.png')} className="w-80 h-80 object-contain" />,
          title: 'Welcome to CovSP!',
          subtitle: 'Help stop the spread by turning Bluetooth on. When outside the home, stay at least six feet away from other people, and avoid groups',
          titleStyles:{color:'white',fontSize:30},
          subTitleStyles:{color:'white',fontSize:20, fontStyle: 'italic'}
        },
        {
            backgroundColor: 'rgb(14 165 233)',
            image: <Image source={require('../images/onboarding_2.png')} className="w-80 h-80 object-contain"/>,
            title: 'How does it works?',
            subtitle: 'CovSP uses Bluetooth signals to determine when your phone is near another phone that also has the app installed.',
            titleStyles:{color:'white',fontSize:30,fontStyle: 'italic'},
            subTitleStyles:{color:'white',fontSize:20, fontStyle: 'italic'}
          },
      ]}
    />
  )
}

export default OnboardingScreen
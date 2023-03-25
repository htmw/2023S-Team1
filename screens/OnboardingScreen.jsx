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
          image: <Image source={require('../images/onboarding_1.png')} className="w-64 h-64 object-contain" />,
          title: 'Welcome to CovSP!',
          subtitle: 'CovSP (Covid Safety Protocol) Help stop the spread by updating your data. When outside the home, stay at least six feet away from other people, and avoid groups',
          titleStyles:{color:'white',fontSize:30},
          subTitleStyles:{color:'white',fontSize:17,textAlign:'justify'}
        },
        {
            backgroundColor: 'rgb(14 165 233)',
            image: <Image source={require('../images/onboarding_2.png')} className="w-64 h-64 object-contain"/>,
            title: 'How does it works?',
            subtitle: 'CovSP uses Data of your contacts and loved ones has the app installed. using the data App warns you when effected person is update their status in the app',
            titleStyles:{color:'white',fontSize:30},
            subTitleStyles:{color:'white',fontSize:17,textAlign:'justify'}
          },
      ]}
      
    />
  )
}

export default OnboardingScreen
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Image } from 'react-native'
import Background from '../components/Background'

const Home = () => {
  return (
    <Background>
            <Image source={require('../images/Home.png')} className="w-64 h-64 object-contain"/>
    </Background>
  )
}

export default Home
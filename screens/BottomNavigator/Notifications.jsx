import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Image } from 'react-native'
import Background from '../../components/Background'

const Notifications = () => {
  return (
    <Background>
      <Image source={require('../../images/Notifications.png')} className="w-64 h-64 object-contain"/>
    </Background>
  )
}

export default Notifications
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Image } from 'react-native'
import Background from '../components/Background'
import QRCode from 'react-native-qrcode-svg'
import QRScanner from './QRScanner'
import Button from '../components/Button'
 import { useNavigation } from '@react-navigation/native'


const Friends = () => {
  const logo = require('../images/Logo.png');
  const navigation = useNavigation();
  return (
    <Background>
      <QRCode className="w-80 h-72 object-contain"
      value='https://github.com/htmw/2023S-Team1/tree/CovSP'
      logo={logo}
      logoSize={30}
      />
      <Button onPress={() => navigation.navigate('QRScanner')} >Add Friends</Button>
    </Background>

  )
}

export default Friends
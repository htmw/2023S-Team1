import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Background from '../../components/Background'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


export default function Settings({ navigation }){
  return (
    <Background>
      <Logo />
      <Button mode="contained" onPress={() => navigation.replace('Login')}>
        Logout
      </Button>
    </Background>
  )
}


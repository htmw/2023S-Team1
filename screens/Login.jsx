import { View, Text, SafeAreaView, TextInput,requireNativeComponent} from 'react-native'
import { useState, useEffect } from 'react';



const Login = () => {

  return (
    <SafeAreaView className="px-2 flex-1 bg-white"> 
        <View className="flex-row mt-10">
            <Text className="font-bold text-2xl">Cov</Text>
            <Text className="font-bold text-2xl text-sky-500">SP</Text>
        </View>
    </SafeAreaView>
  )
}

export default Login
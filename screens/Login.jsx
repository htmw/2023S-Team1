import { View, Text, SafeAreaView, TextInput} from 'react-native'
import React from 'react'




const Login = () => {
  return (
    <SafeAreaView className="px-2 flex-1 bg-white"> 
        <View className="flex-row mt-10">
            <Text className="font-bold text-2xl">Cov</Text>
            <Text className="font-bold text-2xl text-sky-500">SP</Text>
        </View>
        <View className="mt-12">
            <Text className="font-bold text-2xl">Welcome Back,</Text>
            <Text className="font-bold text-2xl text-gray-400">SignIn to Continue..</Text>
        </View>
        <View className="mt-16">
            <View>
                <TextInput placeholder='Email' className="border-b-2 border-blue-100 p-3 text-lg"></TextInput>
            </View>
            <View>
                <TextInput placeholder='Password' className="border-b-2 border-blue-100 p-3 text-lg" secureTextEntry></TextInput>
            </View>
        </View>
    </SafeAreaView>

  )
}

export default Login
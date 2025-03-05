import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import Button from '@/components/Button';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const daftar = () => {
    const navigation = useRouter();
  return (
    <SafeAreaView style={tw`flex-1 bg-black px-3`}>

        <View style={tw`flex-row gap-32`}>
            <AntDesign name='left' size={24} style={tw`text-white`} onPress={() => navigation.navigate("/auth/login")}/>
            <Text style={tw`text-white font-bold text-4l`}>Daftar Akun</Text>
        </View>

        <View style={tw`pt-60`}>
            <TextInput style={tw`border bg-gray-800 rounded-lg px-4 py-2 mt-6 h-12`}></TextInput>
            <TextInput style={tw`border bg-gray-800 rounded-lg px-4 py-2 mt-6 h-12`}></TextInput>
        </View>
        <View style={tw`mt-8`}>
            <Button title='Daftar' bgBtn='green-400' bgText='Black ' rute='/auth/login'/>
        </View>
        <Text style={tw`text-gray-600 pt-4`}>Dengan mendaftar kamu menyetujui Syarat dan Ketentuan. Privacy Policy dan Disclaimer</Text>

    </SafeAreaView>
  )
}

export default daftar
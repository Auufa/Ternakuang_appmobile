import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import Icon from '@/components/Icon';

const login = () => {
    const navigation = useRouter();
  return (
    <SafeAreaView style={tw`flex-1 bg-black px-3`}>
        <View>
        <Text style={tw`text-right text-gray-800`}>Lewati</Text>
        <Text style={tw`text-white text-2xl extra-Bold pt-30`}>TERNAKUANG.</Text>
        <TextInput style={tw`border bg-gray-800 rounded-lg px-4 py-2 mt-6 h-12`}></TextInput>
        <TextInput style={tw`border bg-gray-800 rounded-lg px-4 py-2 mt-6 h-12`}></TextInput>
        <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-white pt-2`}>Ingat Saya</Text>
            <Text style={tw`text-right pt-2 text-white`}>Lupa Password?</Text>
        </View>
        <View style={tw`mt-10`}>
            <Button title='Log In' bgBtn='green-400' bgText='Black ' rute='/(tabs)/Home' />
        </View>
        <View style={tw`flex-row justify-center gap-2 pt-4`}>
            <Text style={tw`text-white`}>Belum punya akun?</Text>
            <Text style={tw`text-green-500 font-bold`} onPress={() => navigation.navigate("/auth/daftar")}>Daftar.</Text>
        </View>

        <Text style={tw`text-white text-center pt-10`}>Atau Masuk Melalui</Text>
        
        <View style={tw`flex-row justify-center gap-4 pt-5`}>
            <Icon icon='google' />
            <Icon icon='apple1' />
        </View>

        
        </View>
    </SafeAreaView>
    
  )
}

export default login
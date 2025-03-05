import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import Button from '@/components/Button';

const Index = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black px-3`}>
        <View>
            <Text style={tw`text-right text-gray-800`}>Lewati</Text>
            <View style={tw`justify-center items-center pt-7`}>
                <Image source={require('@/assets/images/personal.png')} style={tw`w-70 h-120`}/>
            </View>
            <Text style={tw`text-center text-white text-2xl extra-Bold pt-2`}>Belajar Investasi {'\n'}& Keuangan Pribadi</Text>
           <Text style={tw`text-center text-white text-sm pt-2`}>Belajar paling gampang,praktis, & interaktif. dengan {'\n'}menonton video secara online dengan lebih dari 150+Video{'\n'}dari mentor yang sudah ahli di bidangnya</Text>

            <View style={tw`pt-6`}>
                <Button title='Mulai Belajar' bgBtn='green-500' bgText='Black ' rute=''/>
                <View style={tw`pt-2`}>
                    <Button title='Login' bgBtn='Black' bgText='white' rute="/auth/login"/>
                </View> 
            </View>
           
        </View>
    </SafeAreaView>
    
  )
}

export default Index
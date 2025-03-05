import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { AntDesign, FontAwesome,Fontisto,Ionicons } from '@expo/vector-icons';
import Iconborder from '@/components/Iconborder';

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black px-3`}>

      <View style={tw`flex-row gap-50`}>
        <Text style={tw`text-white font-bold text-4l`}>Hai, Calon Sultan!</Text>
        <Ionicons name='chatbubble-ellipses-outline' color={'white'} size={22}/>
        <Fontisto name='user-secret' color={'white'} size={22}/>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row gap-3 pt-4`}>
            <Image source={require('@/assets/images/ternakuang.jpg')} style={tw`w-85 h-50 rounded-lg`} resizeMode='stretch'/>
            <Image source={require('@/assets/images/images.jpg')} style={tw`w-85 h-50 rounded-lg`} resizeMode='stretch'/>
          </View>
        </ScrollView>
      </View>
     

      <View style={tw`flex-row gap-6 pt-4`}>
        <Iconborder icon='graduation-cap' title='Modul Akademi' />
        <Iconborder icon='users' title='Comunity' />
      </View>
      <View style={tw`flex-row gap-6 pt-3`}>
        <Iconborder icon='ticket' title='Event Live' />
        <Iconborder icon='chat' title='Grup Diskusi' />
      </View>

      <View style={tw`mt-10 p-2 rounded-lg bg-neutral-900 gap-3 w-98 items-center `}>
        <View style={tw`flex-row gap-4 items-center`}>
          <Image source={require('@/assets/images/Thinking face-rafiki.png')} style={tw`w-24 h-18`}/>
          <View>
            <View style={tw`flex-row gap-2`}>
              <Text style={tw`text-white font-bold text-4l`}>Yuk, Ikuti</Text>
              <Text style={tw`text-green-500 font-bold text-4l`}>Tes Finansial!</Text> 
            </View>

            <View>
              <Text style={tw`text-white text-3l`}>Dapatkan Saran & Rekomendasi Belajarmu</Text>
            </View>

          </View> 
          
          <View style={tw`rounded-full bg-green-300 p-1`}>
            <AntDesign name='right' size={20} style={tw`items-center`}/>
          </View>
          
        </View>
      </View>

      <View style={tw`flex-row justify-between gap-2 pt-9`}>

        <View style={tw`flex-row gap-2 items-center`}>
          <Ionicons name='calendar-number' color={'white'} size={25}></Ionicons>
          <Text style={tw`text-neutral-400 text-4l`}>Ikuti Live Event Terdekat</Text>
        </View>
        
        <View style={tw`items-center`}>
          <Text style={tw`text-neutral-400`}>Lihat Semua</Text>
        </View>
    
      </View>

      <View>
        
      </View>

    </SafeAreaView>
    
  )
}

export default Home
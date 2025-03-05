import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import tw from 'twrnc';

const Icon = ({icon}: any) => {
  return (
    <View style={tw`border p-4 rounded-lg border-white`}>
        <AntDesign name={icon} size={25} style={tw`text-white`}/>
    </View>
   
  )
}

export default Icon
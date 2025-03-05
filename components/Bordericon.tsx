import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import tw from 'twrnc';

const Bordericon = ({title, icon}: any) => {
  return (
    <View style={tw`rounded-lg border border-l-8 border-green-500 `}>
      <Text>{title}</Text>
      <Entypo name={icon} size={25} style={tw`text-white`} />
    </View>
  )
}

export default Bordericon
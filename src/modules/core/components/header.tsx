import { View, Text, TextInput } from 'react-native'
import { Search } from 'lucide-react-native'
import React from 'react'

export function Header() {
  return (
    <View className="mt-7 mb-4">
      <Text className="text-xl font-semibold text-white leading-none">What do you want to watch?</Text>
      <View className="mt-4 bg-background-input w-full h-11 flex-row justify-between items-center rounded-2xl px-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#67686D'}
          className="text-lg font-semibold text-white flex-1"
        />
        <Search className="text-input rotate-90" size={28} />
      </View>
    </View>
  )
}

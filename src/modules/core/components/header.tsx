import { useSearch } from '../contexts/search-context'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Search, X } from 'lucide-react-native'
import React from 'react'

export function Header() {
  const { search, setSearch } = useSearch()

  function handleSearch(text: string) {
    setSearch(text)
  }

  const clearSearch = () => setSearch('')

  return (
    <View className="mt-7 mb-4">
      <Text className="text-xl font-semibold text-white leading-none">What do you want to watch?</Text>
      <View className="mt-4 bg-background-input w-full h-11 flex-row justify-between items-center rounded-2xl px-4">
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search"
          placeholderTextColor={'#67686D'}
          className="text-lg font-semibold text-white flex-1"
        />
        {!search.length ? (
          <Search className="text-input rotate-90" size={28} />
        ) : (
          <TouchableOpacity onPress={clearSearch}>
            <X className="text-white" size={28} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

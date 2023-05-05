import { Card } from '@/modules/core'
import { Star } from 'lucide-react-native'
import React from 'react'
import { View, Text } from 'react-native'

export const SearchMovieItem = (props: MovieItem) => {
  const points = props.vote_average.toPrecision(2)

  return (
    <View className="w-full h-36 flex-row items-center gap-2 my-6">
      <Card data={props} />
      <View>
        <Text className="text-white truncate">{props.title}</Text>
        <View className="flex-row justify-start items-center gap-2">
          <Star size={14} className="text-orange_star" />
          <Text className="text-base text-orange_star">{points}</Text>
        </View>
      </View>
    </View>
  )
}

import { PopularMoviesList } from '@/modules/movies'
import { Header } from '@/modules/core'
import { View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className="flex-1 bg-background pt-8 px-6">
      <Header />
      <PopularMoviesList />
    </View>
  )
}

export default Home

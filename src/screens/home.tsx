import { View, ActivityIndicator } from 'react-native'
import { PopularMoviesList, SearchMovies } from '@/modules/movies'
import { Header, useSearch } from '@/modules/core'
import React from 'react'

const Home = () => {
  const { loading } = useSearch()

  return (
    <View className="flex-1 bg-background pt-8 px-6">
      <Header />
      <PopularMoviesList />
      <SearchMovies />
      {loading && <ActivityIndicator size={50} color="#0296E5" className="my-4" />}
    </View>
  )
}

export default Home

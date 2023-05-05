import { SearchProvider, useSearch } from '@/modules/core'
import { HomeScreen } from '@/screens'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function App() {
  return (
    <SearchProvider>
      <HomeScreen />
      <StatusBar style="inverted" />
    </SearchProvider>
  )
}

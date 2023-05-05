import { movieService } from '../service/movies-service'
import { useDebounce, useSearch } from '@/modules/core'
import { FlatList } from 'react-native'
import React from 'react'
import { SearchMovieItem } from './search-movie-item'

export function SearchMovies() {
  const { isSearched, search, setLoading, setIsSearched } = useSearch()
  const [resultMovies, setResultMovies] = React.useState<MovieItem[]>([])
  const [query] = useDebounce(search)

  async function loadSearchMovies() {
    setLoading(true)
    try {
      const response = await movieService.search({ query: query as string })
      setResultMovies(response!.results)
      setIsSearched(response!.results.length > 0)
    } catch (error) {
      console.error((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    loadSearchMovies()
  }, [query])

  return (
    <>
      {isSearched && (
        <FlatList
          data={resultMovies}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={movie => <SearchMovieItem {...movie.item} />}
          contentContainerStyle={{ paddingBottom: 14 }}
        />
      )}
    </>
  )
}

import { movieService } from '../service/movies-service'
import { useSearch, Card } from '@/modules/core'
import { FlatList } from 'react-native'
import React from 'react'

export function PopularMoviesList() {
  const [popularMovies, setPopularMovies] = React.useState<MovieItem[]>([])
  const { setLoading, isSearched } = useSearch()
  const [page, setPage] = React.useState(1)

  const loadPopularMovies = async () => {
    setLoading(true)
    try {
      const response = await movieService.getPopularMovies({ page })
      setPopularMovies(state => [...state, ...response!.results])
      setPage(state => state + 1)
    } catch (error) {
      console.error((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    loadPopularMovies()
  }, [])

  return (
    <>
      {!isSearched && (
        <FlatList
          numColumns={3}
          data={popularMovies}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onEndReached={() => loadPopularMovies()}
          onEndReachedThreshold={0.5}
          renderItem={movie => <Card data={movie.item} />}
          contentContainerStyle={{ paddingBottom: 14 }}
        />
      )}
    </>
  )
}

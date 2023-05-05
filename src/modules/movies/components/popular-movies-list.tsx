import { movieService } from '../service/movies-service'
import { MovieCard } from './movie-card'
import { FlatList } from 'react-native'
import React from 'react'

export function PopularMoviesList() {
  const [popularMovies, setPopularMovies] = React.useState<MovieItem[]>([])
  const [page, setPage] = React.useState(1)

  const loadPopularMovies = async () => {
    try {
      const response = await movieService.getPopularMovies({ page })
      setPopularMovies(state => [...state, ...response!.results])
      setPage(state => state + 1)
    } catch (error) {
      console.error((error as any).message)
    }
  }

  React.useEffect(() => {
    loadPopularMovies()
  }, [])

  return (
    <FlatList
      numColumns={3}
      data={popularMovies}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      onEndReached={() => loadPopularMovies()}
      onEndReachedThreshold={0.5}
      renderItem={movie => <MovieCard data={movie.item} />}
      contentContainerStyle={{ paddingBottom: 14 }}
    />
  )
}

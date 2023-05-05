interface MovieItem {
  id: number
  title: string
  poster_path: string
  overview: string
  release_date: string
  vote_average: number
}

interface MoviesList {
  page: number
  results: MovieItem[]
  total_results: number
  total_pages: number
}

interface ErrorApi {
  status_code: number
  status_message: string
}

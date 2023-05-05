import { Service } from '@/modules/core'

type RequestProps = {
  [key: string]: string | number
}

class MovieService extends Service {
  async getPopularMovies(props?: RequestProps) {
    const { page = 1 } = props as RequestProps

    const response = await this.request<{ results: MovieItem[]; page: number; error?: ErrorApi }>({
      url: '/movie/popular',
      params: {
        page
      }
    })

    switch (response.code) {
      case 200:
        return response.body
      case 401:
        throw new Error(`$${response.body?.error?.status_code}: ${response.body?.error?.status_message}`)
      case 404:
        throw new Error(`$${response.body?.error?.status_code}: ${response.body?.error?.status_message}`)
      default:
        throw new Error('Erro no servidor da TMDb')
    }
  }

  async search(props?: RequestProps) {
    const { query } = props as RequestProps

    const response = await this.request<{ results: MovieItem[]; page: number; error?: ErrorApi }>({
      url: '/search/movie',
      params: {
        query
      }
    })

    switch (response.code) {
      case 200:
        return response.body
      case 401:
        throw new Error(`$${response.body?.error?.status_code}: ${response.body?.error?.status_message}`)
      case 404:
        throw new Error(`$${response.body?.error?.status_code}: ${response.body?.error?.status_message}`)
      default:
        throw new Error('Erro no servidor da TMDb')
    }
  }
}

export const movieService = new MovieService()

import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { env } from '@/main/config'

type HttpRequest = {
  url: string
  body?: any
  headers?: any
  params?: any
  method?: 'get' | 'post' | 'put' | 'delete'
}

type HttpResponse<T = any> = {
  code: number
  body?: T
}

export class Service {
  private axios: AxiosInstance

  constructor(baseURL = env.baseUrl) {
    this.axios = axios.create({
      baseURL
    })
  }

  async request<T = any>(props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, body, headers, method = 'get', params } = props
    let response: AxiosResponse

    try {
      response = await this.axios({
        url,
        data: body,
        method,
        params: {
          api_key: env.apiKey,
          language: 'pt-BR',
          include_adults: true,
          ...params
        },
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      code: response.status,
      body: response.data
    }
  }
}

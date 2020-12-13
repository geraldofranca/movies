import { AccessDeniedError, UnexpectedError } from "@/domain/errors"
import { GetMovieDetail } from "@/domain/usecases"
import { HttpClient, HttpStatusCode } from "@/infra/http/protocols"

export class RemoteMovieDetail implements GetMovieDetail {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteMovieDetail.Model>
  ) {}

  async get (): Promise<GetMovieDetail.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteMovies = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteMovies
      case HttpStatusCode.noContent: return {
        id: 0,
        title: '',
        overview: '',
        poster_path: '',
        genres: [],
        runtime: 0,
        release_date: '',
        original_language: '',
        original_title: ''
      }
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteMovieDetail {
  export type Model = {
    id: Number;
    title: string;
    overview: string;
    poster_path: string;
    genres: Genres[];
    runtime: Number;
    release_date: string;
    original_language: string;
    original_title: string;
  }

  type Genres = {
    name: string;
  };
}

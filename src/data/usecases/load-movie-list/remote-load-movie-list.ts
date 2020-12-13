import { AccessDeniedError, UnexpectedError } from "@/domain/errors"
import { LoadMovieList } from "@/domain/usecases/load-movie-list"
import { HttpClient, HttpStatusCode } from "@/infra/http/protocols"

export class RemoteLoadMovieList implements LoadMovieList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadMovieList.Model>
  ) {}

  async load (): Promise<LoadMovieList.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteMovies = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteMovies
      case HttpStatusCode.noContent: return {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      }
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadMovieList {
  export type Model = {
    page: Number;
    results: Movies[];
    total_pages: Number;
    total_results: Number;
  }

  type Movies = {
    id: Number;
    title: string;
    overview: string;
    poster_path: string;
    genres: Genres[];
    runtime: Number;
  }

  type Genres = {
    name: string;
  };
}

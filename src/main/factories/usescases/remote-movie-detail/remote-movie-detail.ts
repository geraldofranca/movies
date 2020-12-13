import { makeApiUrl, makeClickHttpClient } from '@/main/factories/http'
import { GetMovieDetail } from '@/domain/usecases'
import { RemoteMovieDetail } from '@/data/usecases/get-movie-detail/remote-get-movie-detail'

export const makeRemoteMovieDetail = (path: string): GetMovieDetail =>
  new RemoteMovieDetail(makeApiUrl(path), makeClickHttpClient())

import { makeApiUrl, makeClickHttpClient } from '@/main/factories/http'
import { LoadMovieList } from '@/domain/usecases'
import { RemoteLoadMovieList } from '@/data/usecases/load-movie-list/remote-load-movie-list'

export const makeRemoteLoadMovieList = (path: string): LoadMovieList =>
  new RemoteLoadMovieList(makeApiUrl(path), makeClickHttpClient())

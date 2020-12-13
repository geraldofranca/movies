import React, { createContext, useCallback, useContext, useState } from 'react';
import { makeRemoteLoadMovieList } from '@/main/factories/usescases/remote-load-movie-list/remote-load-movie-factory'
import { makeRemoteMovieDetail } from '@/main/factories/usescases/remote-movie-detail/remote-movie-detail';

interface SearchParams {
  title: string;
}

type Genres = {
  name: string;
};

interface MovieProps {
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

interface MovieContextData {
  searchMovie(params: SearchParams): Promise<void>;
  searchMovieDetail(id: string): Promise<void>;
  listTrending(): Promise<void>;
  getMovieSimilar(id: string): Promise<void>;
  listDiscover(): Promise<void>;
  movies: MovieProps[];
  trendings: MovieProps[];
  movieDetail: MovieProps;
  searchTitle: string;
  movieSimilar: MovieProps[];
  discover: MovieProps[];
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

const MovieProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [trendings, setTrendings] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [movieDetail, setMovieDetail] = useState<MovieProps>({} as MovieProps);
  const [searchTitle, setSearchTitle] = useState('');

  const searchMovie = useCallback(async ({ title }) => {
    setSearchTitle(title);
    const url = `search/movie?query=${title}&api_key=${process.env.API_KEY}&language=${process.env.API_LANGUAGE}`
    const remoteLoadMovieList = makeRemoteLoadMovieList(url);
    const response = await remoteLoadMovieList.load()
    setMovies(response.results);
  }, []);

  const listTrending = useCallback(async () => {
    const url = `trending/movie/day?api_key=${process.env.API_KEY}&language=${process.env.API_LANGUAGE}`
    const remoteLoadMovieList = makeRemoteLoadMovieList(url);
    const response = await remoteLoadMovieList.load()
    setTrendings(response.results);
  }, []);

  const listDiscover = useCallback(async () => {
    const url = `discover/movie?api_key=${process.env.API_KEY}&language=${process.env.API_LANGUAGE}`
    const remoteLoadMovieList = makeRemoteLoadMovieList(url);
    const response = await remoteLoadMovieList.load();
    console.log(response.results)
    setDiscover(response.results);
  }, []);

  const searchMovieDetail = useCallback(async (id: string) => {
    const url = `movie/${id}?api_key=${process.env.API_KEY}&language=${process.env.API_LANGUAGE}`
    const remoteMovieDetail = makeRemoteMovieDetail(url)
    const response = await remoteMovieDetail.get()
    response.poster_path = `${process.env.API_PREFIX_URL_IMG}${response.poster_path}`
    setMovieDetail(response)
    getMovieSimilar(id)
  }, []);

  const getMovieSimilar = useCallback(async (id: string) => {
    const url = `movie/${id}/similar?api_key=${process.env.API_KEY}&language=${process.env.API_LANGUAGE}`
    const remoteLoadMovieList = makeRemoteLoadMovieList(url)
    const response = await remoteLoadMovieList.load()
    response.results.map(movie => movie.poster_path = `${process.env.API_PREFIX_URL_IMG}${movie.poster_path}`)
    setMovieSimilar(response.results)
  }, []);

  return (
    <MovieContext.Provider
      value={{
        searchMovie,
        movies,
        searchTitle,
        movieDetail,
        searchMovieDetail,
        listTrending,
        trendings,
        movieSimilar,
        getMovieSimilar,
        discover,
        listDiscover
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

function useMovie(): MovieContextData {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovie must be used within an MovieContext');
  }

  return context;
}

export { MovieProvider, useMovie };

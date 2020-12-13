export interface LoadMovieList {
  load: () => Promise<LoadMovieList.Model>
}

export namespace LoadMovieList {
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

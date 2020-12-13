export interface GetMovieDetail {
  get: () => Promise<GetMovieDetail.Model>
}

export namespace GetMovieDetail {
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

export type ogTitle = {
  id: number;
  title: string;
}

export type Movie = {
  // From our Kaggle dataset
  id: number;
  title: string;
  // From TMDB Api
  adult: boolean;
  genres: string[];
  ogLanguage: string;
  overview: string;
  popularity: number
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
}
